import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { setHighestScore } from '../ducks/score';
import { setGameSpeed, setGridSize } from '../ducks/settings';
import { StorageData } from '../constants';
import { getData } from '../storage';

const toNumber = value => Number(value);

const assocSaveAction = R.assoc('saveAction');
const assocTransform = R.ifElse(R.identity, R.assoc('transform'), R.identity);

const assocToStorageData = (saveAction, transformFunction) => {
  return R.o(assocSaveAction(saveAction), assocTransform(transformFunction));
};

const mapSaveActions = R.evolve({
  SCORE: assocToStorageData(setHighestScore, toNumber),
  SPEED: assocToStorageData(setGameSpeed, toNumber),
  SIZE: assocToStorageData(setGridSize, toNumber),
});

const StorageDataExtended = mapSaveActions(StorageData);

export default (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    R.forEachObjIndexed(({ key, saveAction, transform }) => {
      getData(key).then(
        R.when(R.identity, R.compose(dispatch, saveAction, transform)),
      );
    }, StorageDataExtended);
  }, []);
};
