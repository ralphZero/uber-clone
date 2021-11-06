import axios from 'axios';
import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';

const DestinationForm = ({ pickupLat, pickupLong, dropoffLat, dropoffLong }) => {

    useEffect(() => {
        // const pickupForm = document.querySelector('#pickup');
        autocomplete(document.getElementById("pickup"));
        autocomplete(document.getElementById("dropoff"), 'dropoff');
    }, []);

    const token = 'pk.eyJ1IjoicmFscGgtcGxhY2lkZSIsImEiOiJja3ZsbzdydWs2ZnMzMzFxMXR1MDB2Zjl4In0.3INZo_v4GhtfxqjGbAMOEg';

    function autocomplete(inp, tag = 'pickup') {

        let currentFocus;
        inp.addEventListener('input', function(e) {
            let a, b, i, val = this.value;
            closeAllLists();
            if(!val) { return false; }
            currentFocus = -1;
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);

            //fetch addresses
            axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/'+ val +'.json?autocomplete=true&access_token='+token).then((response) => {
                const data = response.data;
                const places = data.features.map((place) => {
                    return {
                        place: place.place_name,
                        long: place.center[0],
                        lat: place.center[1],
                    }
                });
                //console.log(places);
                for (i = 0; i < places.length; i++) {
                    b = document.createElement("DIV");
                    b.innerHTML = '<span>'+ places[i].place +'</span>';
                    b.dataset.lat = places[i].lat;
                    b.dataset.long = places[i].long;
                    b.innerHTML += "<input type='hidden' value='" + places[i].place + "'>";
                    b.addEventListener("click", function(e) {
                        inp.value = this.getElementsByTagName("input")[0].value;
                        if(tag == 'pickup') {
                            pickupLat(this.dataset.lat);
                            pickupLong(this.dataset.long);
                        } else {
                            dropoffLat(this.dataset.lat);
                            dropoffLong(this.dataset.long);
                        }
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
                
            });

        });

        inp.addEventListener('keydown', function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                    /*If the arrow DOWN key is pressed,
                    increase the currentFocus variable:*/
                    currentFocus++;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } else if (e.keyCode == 38) { //up
                    /*If the arrow UP key is pressed,
                    decrease the currentFocus variable:*/
                    currentFocus--;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } else if (e.keyCode == 13) {
                    /*If the ENTER key is pressed, prevent the form from being submitted,*/
                    e.preventDefault();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (x) x[currentFocus].click();
                }
            }
        });

        function addActive(x) {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        }

        function removeActive(x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }

        function closeAllLists(elemt) {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elemt != x[i] && elemt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }

        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });

    }

    return (
        <Container>
            <ImageColumn>
                <Image src='https://img.icons8.com/windows/50/000000/square-full.png'></Image>
                <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'></Line>
                <Image src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'></Image>
            </ImageColumn>
            <FieldColumn>
                <LocationForm autoComplete='off' action='' method='get'>
                    <LocationContainer id='autocomplete'>
                        <FromLocation id='pickup' type='text' placeholder='Enter current location'></FromLocation>
                    </LocationContainer>
                    <LocationContainer>
                        <ToLocation id='dropoff' type='text' placeholder='Enter your destination'></ToLocation>
                    </LocationContainer>
                </LocationForm>
            </FieldColumn>
        </Container>
    );
}

export default DestinationForm;

const Container = tw.div`
    flex py-4 px-3 w-full bg-white rounded-lg
`

const ImageColumn = tw.div`
    flex flex-col items-center
`

const FieldColumn = tw.div`
    flex-grow-1 w-full pr-3
`

const Image = tw.img`
    h-4 w-4 my-3
`

const Line = tw.img`
    h-8 w-auto
`

const LocationForm = tw.form`
    flex flex-col justify-between h-full w-full
`
const LocationContainer = tw.div`
    relative
`

const FromLocation = tw.input`
    h-10 w-full border-b-2 border-gray-50 pl-2 text-black focus:outline-none focus:ring-2 focus:gray-100
`

const ToLocation = tw.input`
    h-10 w-full border-t-2 border-gray-50 pl-2 text-black focus:outline-none focus:ring-2 focus:gray-100
`

