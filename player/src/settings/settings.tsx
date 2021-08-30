import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View, Text, Button, Switch } from 'react-native';
import {SettingsRow, SettingsRowHeader} from './settingrow';

const Settings = () => {
    const [wifiOnly, setWifiOnly] = useState(true);
    const [smartDownloads, setsmartDownloads] = useState(true);

    const toggleWifi = () => setWifiOnly(!wifiOnly);
    const toggleSmartDownload = () => setsmartDownloads(!smartDownloads);

    return (
        <View style={styles.settingsScreen}>
            <StatusBar barStyle={'light-content'} />
            <ScrollView>
                <SettingsRowHeader label="Video Playback" />
                <SettingsRow label="Cellular Data Usage">
                    <Button color="#fff" title=">" />
                </SettingsRow>
                <SettingsRowHeader label="Downloads" />
                <SettingsRow label="Wi-Fi Only">
                    <Switch
                        onValueChange={toggleWifi}
                        value={wifiOnly}
                    />
                </SettingsRow>
                <SettingsRow label="Smart Downloads">
                    <Switch
                        onValueChange={toggleSmartDownload}
                        value={smartDownloads}
                    />
                </SettingsRow>
                <SettingsRow label="Video Quality">
                    <Button color="#fff" title=">" />
                </SettingsRow>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    settingsScreen: {
        backgroundColor: '#111',
        flex: 1,
    },
});

export default Settings;
