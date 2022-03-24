import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import InfoTitle from '../../components/infoTitle/index'
import InfoDay from '../../components/infoDay/index'
import InfoTenDay from '../../components/infoTenDays/index'
import ImageBgd from '../../components/imageBgd/index'
import Search from "../../components/search";

const CityScreen = ({ route, navigation }) => {
    const { insee } = route.params;

    return (
        <>
            <ImageBgd insee={insee}>
                {/* <Search onPress={nav} /> */}

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Search
                        onPress={() => {
                            navigation.navigate('List')
                        }}
                    />
                    <InfoTitle
                        insee={insee}
                    />

                    <InfoDay
                        insee={insee}
                    />
                    <InfoTenDay
                        insee={insee}
                    />
                </ScrollView>

            </ImageBgd>
        </>
    );
};

export default CityScreen;