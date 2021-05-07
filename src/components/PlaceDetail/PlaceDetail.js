import React from 'react';
import { View, Modal, Image, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-vector-icons/Icon';

const PlaceDetail = props => {
    return (
        <Modal>
            <View>
                <Image source={props.place.image} style={{
                    width: "100%",
                    height: 300
                }} />
                <Text style={{
                    textAlign: "center",
                    fontSize: 40
                }}>{props.place.value}</Text>
                <View>
                    <TouchableOpacity 
                        onPress={
                            () => {
                                props.handleDeleteItem(props.place.key);
                            }
                        } >
                            
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Icon name="times-circle" size={60}/>
                        </TouchableOpacity>
                    <Button title="Close" onPress={() => props.handleHideModal()} />
                </View>
            </View>
        </Modal>
    )
}

export default PlaceDetail;