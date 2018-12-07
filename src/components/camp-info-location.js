import React from 'react';
import GoogleMap from "./google-maps";

export default class Location extends React.Component {
    formatAddress(str){
        str = str.split(',');
        return {
            address1: str[0],
            address2: str.splice(1,2).join(',')
        };
    }
    render(){
        const params = {
            lat: this.props.lat,
            lng: this.props.lng
        };
        const list = [params];
        const {address1, address2} = this.formatAddress(this.props.address);

        const {directionsInfo} = this.props;
        return(
        <div className="location">
            {window.navigator.onLine ?
                <GoogleMap hideCard={true} list={list} params={params}/>
                : ''
            }
            <div className="address">
                <div>
                    <p>{address1}</p>
                    <p>{address2}</p>
                </div>
            </div>
        </div>
        )
    }
}
