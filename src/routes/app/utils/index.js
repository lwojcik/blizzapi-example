const router = require('express').Router();
const BlizzAPI = require('../../../../../blizzapi1/dist/index');

/** Regions */

router.get('/getAllRegions', (req, res) => {
  res.json(BlizzAPI.getAllRegions());
});

router.get('/getAllRegionIds', (req, res) => {
  res.json(BlizzAPI.getAllRegionIds());
});

router.get('/getAllRegionNames', (req, res) => {
  res.json(BlizzAPI.getAllRegionNames());
});

router.get('/getRegionNameById/:regionId', (req, res) => {
  const { regionId } = req.params;
  const { paramType } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId);
  res.json(BlizzAPI.getRegionNameById(regionIdParam));
});

router.get('/getRegionIdByName/:regionName', (req, res) => {
  const { regionName } = req.params;
  res.json(BlizzAPI.getRegionIdByName(regionName));
});

router.get('/validateRegionId/:regionId', (req, res) => {
  const { regionId } = req.params;
  res.json(BlizzAPI.validateRegionId(regionId));
});

router.get('/validateRegionName/:regionName', (req, res) => {
  const { regionName } = req.params;
  res.json(BlizzAPI.validateRegionName(regionName));
});

/** Locales */

router.get('/getAllLocales', (req, res) => {
  res.json(BlizzAPI.getAllLocales());
});

router.get('/getAllLocaleNames', (req, res) => {
  res.json(BlizzAPI.getAllLocaleNames());
});

router.get('/getLocalesByRegionId/:regionId', (req, res) => {
  const { regionId } = req.params;
  const { paramType } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId);
  res.json(BlizzAPI.getLocalesByRegionId(regionIdParam));
});

router.get('/checkIfLocaleLooksValid/:locale', (req, res) => {
  const { locale } = req.params;
  res.json(BlizzAPI.checkIfLocaleLooksValid(locale));
});

router.get('/validateLocale/:locale', (req, res) => {
  const { locale } = req.params;
  res.json(BlizzAPI.validateLocale(locale));
});

router.get('/isLocaleValidForRegionId/:locale/:regionId', (req, res) => {
  const { locale, regionId } = req.params;
  res.json(BlizzAPI.isLocaleValidForRegionId(locale, regionId));
});

/** SC2 realms */

router.get('/getAllSc2Realms', (req, res) => {
  res.json(BlizzAPI.getAllSc2Realms());
});

router.get('/getAllAvailableSc2Realms', (req, res) => {
  res.json(BlizzAPI.getAllAvailableSc2Realms());
});

router.get('/getSc2RealmsByRegionId/:regionId', (req, res) => {
  const { regionId } = req.params;
  const { paramType } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId, 10);
  res.json(BlizzAPI.getSc2RealmsByRegionId(regionIdParam));
});

router.get('/checkIfSc2RealmLooksValid/:sc2Realm', (req, res) => {
  const { sc2Realm } = req.params;
  res.json(BlizzAPI.checkIfSc2RealmLooksValid(sc2Realm));
});

router.get('/validateSc2Realm/:sc2Realm', (req, res) => {
  const { sc2Realm } = req.params;
  res.json(BlizzAPI.validateSc2Realm(sc2Realm));
});

router.get('/isSc2RealmValidForRegionId/:sc2Realm/:regionId', (req, res) => {
  const { sc2Realm, regionId } = req.params;
  res.json(BlizzAPI.isSc2RealmValidForRegionId(sc2Realm, regionId));
});

module.exports = router;