import React, {Component} from 'react';

class NavBar extends Component {
    state = {
        locations: ['DurbanSA','Cape Town','PE,SA','Johannesburg,SA','Pretoria,SA','Delhi,India','Gujarat,India','Big Ben,UK','California,USA','London,UK']
    }

    addArrayElements = (e) => {
        var div = document.getElementById("myDropdown");
        var input = document.getElementById("myInput");
        var locationsArray = this.filterArray(this.state.locations, input.value);
        var aElements = this.createElementsArray(locationsArray);

        if (div.childElementCount > 1) {
            var aTags = div.getElementsByTagName('a');

            for (var n = 0; n < aTags.length; n++) {
                if ((aElements.includes(aTags[n]) == false))  {
                    aTags[n].style.display = 'none';
                }
            }

        }

        for (var i = 0; i < locationsArray.length; i++) {
            var a = document.createElement('a');
            a.textContent = locationsArray[i];
            if (div.contains(a) == false) {
                div.appendChild(a);
            }
        }   

    }

    filterArray = (array, input) => {
        var filteredArray = [];
        var count = 0;

        if (input.length > 0) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].startsWith(input)) {
                    filteredArray[count] = array[i];
                    count++;
                }
            }
        }else {
            for (var j = 0; j < array.length; j++) {
                filteredArray[j] = array[j];
            }
        }

        return filteredArray;
    }

    createElementsArray = (locationNamesArray) => {
        var Elements = [];

        for (var i = 0; i < locationNamesArray.length; i++) {
                var tag = document.createElement('a');
                tag.textContent = locationNamesArray[i];
                Elements.push(tag);
        }

        return Elements;
    }

    render() {
        return (
            <div className="dropdown">
                <div id="myDropdown" className="dropdown-content">
                    <input type="search" placeholder="Search" onChange={this.addArrayElements} id="myInput"/>
                </div>
            </div>
        )
    }
}

export default NavBar;