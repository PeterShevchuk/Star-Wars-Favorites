import {HeartIcon} from '../assets/svg/heart.tsx';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useStyles} from '../hooks/useStyles.ts';
import {IListItem} from '../store/list/interface.ts';

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
  const styles = useStyles(getStyles);

  return (
    <TouchableOpacity
      key={item.name}
      style={[styles.itemView, {borderBottomWidth: isLast ? 0 : 1}]}
      onPress={() => onPressCharacter(item)}>
      <TouchableOpacity onPress={() => onPressFavorite(item)}>
        <HeartIcon fill={item.favorite ? 'red' : 'black'} />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{item.name || 'n/a'}</Text>
        <View style={styles.descriptionBlock}>
          <Text style={styles.column}>
            Birth Year: {item.birth_year || 'n/a'}
          </Text>
          <Text style={styles.column}>Gender: {item.gender || 'n/a'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const getStyles = {
  itemView: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    gap: 16,
    alignItems: 'center',
    borderColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  descriptionBlock: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
  },
  column: {
    flex: 1,
    fontSize: 12,
    fontWeight: '400',
  },
};
