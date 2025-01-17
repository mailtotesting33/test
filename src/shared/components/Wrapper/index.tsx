import React from 'react';
import { StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    children?: any;
    noPaddingTop?: boolean;
    noPaddingBottom?: boolean;
    containerStyle?: ViewStyle;
    statusBarBg?: string;
    bgColor?: string;
    barStyle?: 'light-content' | 'dark-content';
}

const Wrapper = ({
    children,
    noPaddingTop,
    noPaddingBottom,
    containerStyle,
    bgColor = 'transparent',
}: Props) => {
    const insets = useSafeAreaInsets();
    const paddingTop = noPaddingTop ? 0 : insets.top;
    const paddingBottom = noPaddingBottom ? 0 : insets.bottom;

    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                translucent
                backgroundColor="transparent"
            />
            <View
                style={[
                    styles.container,
                    {
                        paddingTop,
                        paddingBottom,
                        backgroundColor: bgColor,
                    },
                    containerStyle,
                ]}>
                {children}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Wrapper;
