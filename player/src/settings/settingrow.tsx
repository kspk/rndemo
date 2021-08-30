import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsRow = (props: { label: string}) => (
    <View style={styles.settingsRow}>
        <Text style={styles.settingsRowText}>{props.label}</Text>
        <View style={styles.settingsRowButton}>
            {props.children}
        </View>
    </View>
);

const SettingsRowHeader = (props: { label: string}) => (
    <View style={styles.settingsRowHeader}>
        <Text style={styles.settingsRowHeaderText}>{props.label}</Text>
    </View>
)

const styles = StyleSheet.create({
    settingsRow: {
        height: 44,
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        marginBottom: 1,
        backgroundColor: '#333',
    },
    settingsRowHeader: {
        height: 44,
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        marginBottom: 1,
    },
    settingsRowText: {
        color: 'white',
    },
    settingsRowHeaderText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    settingsRowButton: {
        width: 64,
        height: 44,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});

export {SettingsRow, SettingsRowHeader};
