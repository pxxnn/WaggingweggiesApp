import React from 'react';
import { ScrollView,  View } from 'react-native';
import Banner from '../components/homepage/Banner';
import Pocket from '../components/homepage/Pocket';
import Menu from '../components/homepage/Menu';
import ServiceFlatList from '../components/homepage/ServiceFlatList';
import CommunityFlstList from '../components/homepage/CommunityFlatList';


export default function Home() {
    // const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ flex: 1}}>  
                <Banner/>
                <Pocket/>
                <Menu />
                <ServiceFlatList style={{ margin: 20 }} />
                {/* <CommunityFlstList style={{ margin: 20 }}/> */}
            </View>
        </ScrollView>
    );
}
