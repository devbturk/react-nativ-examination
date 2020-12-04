import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class NewsItem extends React.Component {
    render() {

        const { type, title, description } = this.props;
        let buttonBackground;



        if (type === 'egitim') {
            buttonBackground = '#78866B';
        } else if (type === 'otomotiv') {
            buttonBackground = '#003399';
        } else if (type === 'sagkik') {
            buttonBackground = '#EE82EE';
        } else if (type === 'dunya') {
            buttonBackground = '#796878'
        } else if (type === 'gurme') {
            buttonBackground = '#EBC2AF'
        }



        return (
            <TouchableOpacity
                style={{
                    backgroundColor: buttonBackground,
                    flex: 1,
                    height: 150,
                    width: 'auto',
                    marginTop: 15
                }}>

                <Text
                    style={{ color: 
                    '#ADD8E6', 
                    fontSize: 20, 
                    textAlign: 'center' }}
                >{title}</Text>

                <Text
                    style={{ color: 
                    '#F5DEB3',
                     fontSize: 15,
                     textAlign: 'center' }}


                >{description}</Text>

            </TouchableOpacity>
        )

    }


}

