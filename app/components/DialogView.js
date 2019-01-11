import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Dialog, { DialogContent, SlideAnimation, DialogButton } from 'react-native-popup-dialog';

class DialogView extends Component {

    render() {
        const props = this.props;
        return (
            <Dialog
                onDismiss={() => {
                    props.setDialogVisibility(false);
                }}
                rounded
                width={0.9}
                visible={this.props.setVisible}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'top',
                })}
                onTouchOutside={() => {
                    props.setDialogVisibility(false);
                }}
                actions={[
                    <DialogButton
                        text="OK"
                        key="button-1"
                        textStyle={styles.buttonText}
                        onPress={() => {
                            props.setDialogVisibility(false);
                        }}
                    />,
                ]}
            >
                <DialogContent>
                    <View style={styles.dialog}>
                        <Text style={styles.textHeading}>Simple Todo App</Text>
                        <Text style={styles.textVer}>v0.1 beta</Text>
                        <Text style={styles.text}>Developer{"\n"}1. Fatkhurrohman (2015150036){"\n"}2. Ahmad Muhajirin (2015150037){"\n"}3. Alfian Ramadhan (2015150012)</Text>
                    </View>
                </DialogContent>
            </Dialog>
        );
    }
}

const styles = StyleSheet.create({
    dialog: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    buttonText: {
        fontSize: 14,
        color: '#555555',
        textAlign: 'center'
    },
    textHeading: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333333',
    },
    textVer: {
        fontSize: 16,
        fontWeight: '500',
        color: '#666666',
        marginBottom: 8
    },
    text: {
        fontSize: 14,
        color: '#555555',
    }
});

export default DialogView;