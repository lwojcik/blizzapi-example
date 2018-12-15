const router = require('express').Router();
const { BattleNetUtils } = require('../../../../../blizzard-battlenet-api');

/** Regions */

router.get('/getAllRegions', (req, res) => {
  res.json(BattleNetUtils.getAllRegions());
});

router.get('/getAllRegionIds', (req, res) => {
  res.json(BattleNetUtils.getAllRegionIds());
});

router.get('/getAllRegionNames', (req, res) => {
  res.json(BattleNetUtils.getAllRegionNames());
});

router.get('/getRegionNameById/:regionId', (req, res) => {
  const { regionId } = req.params;
  const { paramType } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId);
  res.json(BattleNetUtils.getRegionNameById(regionIdParam));
});

router.get('/getRegionIdByName/:regionName', (req, res) => {
  const { regionName } = req.params;
  res.json(BattleNetUtils.getRegionIdByName(regionName));
});

router.get('/validateRegionId/:regionId', (req, res) => {
  const { regionId } = req.params;
  res.json(BattleNetUtils.validateRegionId(regionId));
});

router.get('/validateRegionName/:regionName', (req, res) => {
  const { regionName } = req.params;
  res.json(BattleNetUtils.validateRegionName(regionName));
});

/** Locales */

router.get('/getAllLocales', (req, res) => {
  res.json(BattleNetUtils.getAllLocales());
});

router.get('/getAllLocaleNames', (req, res) => {
  res.json(BattleNetUtils.getAllLocaleNames());
});

router.get('/getLocalesByRegionId/:regionId', (req, res) => {
  const { regionId } = req.params;
  const { paramType } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId);
  res.json(BattleNetUtils.getLocalesByRegionId(regionIdParam));
});

router.get('/checkIfLocaleLooksValid/:locale', (req, res) => {
  const { locale } = req.params;
  res.json(BattleNetUtils.checkIfLocaleLooksValid(locale));
});

router.get('/validateLocale/:locale', (req, res) => {
  const { locale } = req.params;
  res.json(BattleNetUtils.validateLocale(locale));
});

router.get('/isLocaleValidForRegionId/:locale/:regionId', (req, res) => {
  const { locale, regionId } = req.params;
  res.json(BattleNetUtils.isLocaleValidForRegionId(locale, regionId));
});

/** Default locales */

router.get('/getAllDefaultLocaleIndexes', (req, res) => {
  res.json(BattleNetUtils.getAllDefaultLocaleIndexes());
});

router.get('/getAllDefaultLocaleNames', (req, res) => {
  res.json(BattleNetUtils.getAllDefaultLocaleNames());
});

router.get('/getDefaultLocaleIndexForRegionId/:regionId', (req, res) => {
  const { regionId } = req.params;
  const { paramType } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId);
  res.json(BattleNetUtils.getDefaultLocaleIndexForRegionId(regionIdParam));
});

router.get('/getDefaultLocaleNameForRegionId/:regionId', (req, res) => {
  const { regionId } = req.params;
  const { paramType } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId);
  res.json(BattleNetUtils.getDefaultLocaleNameForRegionId(regionIdParam));
});

/** SC2 realms */

router.get('/getAllSc2Realms', (req, res) => {
  res.json(BattleNetUtils.getAllSc2Realms());
});

router.get('/getAllAvailableSc2Realms', (req, res) => {
  res.json(BattleNetUtils.getAllAvailableSc2Realms());
});

router.get('/getSc2RealmsByRegionId/:regionId', (req, res) => {
  const { regionId } = req.params;
  const { paramType } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId);
  res.json(BattleNetUtils.getSc2RealmsByRegionId(regionIdParam));
});

router.get('/checkIfSc2RealmLooksValid/:sc2Realm', (req, res) => {
  const { sc2Realm } = req.params;
  res.json(BattleNetUtils.checkIfSc2RealmLooksValid(sc2Realm));
});

router.get('/validateSc2Realm/:sc2Realm', (req, res) => {
  const { sc2Realm } = req.params;
  res.json(BattleNetUtils.validateSc2Realm(sc2Realm));
});

router.get('/isSc2RealmValidForRegionId/:sc2Realm/:regionId', (req, res) => {
  const { sc2Realm, regionId } = req.params;
  res.json(BattleNetUtils.isSc2RealmValidForRegionId(sc2Realm, regionId));
});

module.exports = router;
