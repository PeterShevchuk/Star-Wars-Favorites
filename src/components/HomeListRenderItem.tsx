import {HeartIcon} from '../assets/svg/heart.tsx';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IListItem} from '../interfaces/GlobalState.ts';
import {moderateScale} from '../utils/metrics.ts';

interface IHomeListRenderItem {
  item: IListItem;
  isLast: boolean;
  onPressCharacter: (item: IListItem) => void;
  onPressFavorite: (item: IListItem) => void;
}

export const HomeListRenderItem = ({
  item,
  isLast,
  onPressCharacter,
  onPressFavorite,
}: IHomeListRenderItem) => {
  return (
    <TouchableOpacity
      key={item.name}
      style={[styles.itemView, {borderBottomWidth: isLast ? 0 : 1}]}
      onPress={() => onPressCharacter(item)}>
      <TouchableOpacity onPress={() => onPressFavorite(item)}>
        <HeartIcon fill={item.favorite ? 'red' : 'black'} />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{item.name || 'unknown'}</Text>
        <View style={styles.descriptionBlock}>
          <Text style={styles.column}>
            Birth Year: {item.birth_year || 'unknown'}
          </Text>
          <Text style={styles.column}>Gender: {item.gender || 'unknown'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemView: {
    flex: 1,
    flexDirection: 'row',
    padding: moderateScale(10),
    gap: moderateScale(16),
    alignItems: 'center',
    borderColor: '#ccc',
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  descriptionBlock: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: moderateScale(10),
  },
  column: {
    flex: 1,
    fontSize: moderateScale(12),
    fontWeight: '400',
  },
});
