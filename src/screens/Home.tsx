import React from 'react';
import {ScrollView} from 'react-native';
import {Layout} from '../components/Layout.tsx';
import {HomeStatistic} from '../components/HomeStatistic.tsx';
import {moderateScale} from '../utils/metrics.ts';
import {HomeTitleBlock} from '../components/HomeTitleBlock.tsx';
import {HomeList} from '../components/HomeList.tsx';

export const HomeScreen = () => {
  return (
    <Layout>
      <ScrollView
        contentContainerStyle={{minWidth: '100%', gap: moderateScale(16)}}>
        <HomeTitleBlock />
        <HomeStatistic />
        <HomeList />
      </ScrollView>
    </Layout>
  );
};
