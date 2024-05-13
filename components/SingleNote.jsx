import React from 'react'
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Single Note Component
 * A single page note view with a title and content
 */

const SingleNote = () => {
    const [heading, onChangeText] = React.useState('Heading');

    return (
        <SafeAreaView>
            {/* Text input for heading */}
            <TextInput 
                onChangeText={onChangeText}
                value = {heading}
            />

            {/* Text input for content */}
            <TextInput 
                value = {content}
            />
        </SafeAreaView>
    )
}

export default SingleNote