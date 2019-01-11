import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { lighterWhite } from '../utils/Colors';

const ButtonInfo = ({ setDialogVisibility }) => (
    <TouchableOpacity 
        onPress={() => {
            setDialogVisibility(true);
        }}
    >
		<MaterialIcons name="info" size={24} color={lighterWhite} />
	</TouchableOpacity>
);

export default ButtonInfo;
