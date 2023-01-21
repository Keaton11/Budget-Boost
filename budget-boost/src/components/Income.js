import React, {Component, useStte} from 'react';
import {Text, View, TextInput} from 'react-native';

function Income() {
    const [income, setIncome] = useState('');
  return (
    <View>
        <div>Income</div>
    <TextInput
    style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        />
    </View>
  );
}

export default Income;