import React from 'react';
import {ScrollView} from 'react-native';
import {Layout} from '../components/Layout.tsx';
import {HomeStatistic} from '../components/HomeStatistic.tsx';
import {HomeTitleBlock} from '../components/HomeTitleBlock.tsx';
import {HomeList} from '../components/HomeList.tsx';
import {useStyles} from '../hooks/useStyles.ts';

export const HomeScreen = () => {
  const styles = useStyles({
    view: {
      minWidth: '100%',
      gap: 16,
      padding: 16,
    },
  });

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.view}>
        <HomeTitleBlock />
        <HomeStatistic />
        <HomeList />
      </ScrollView>
    </Layout>
  );
};
