const router = require('express').Router();
const {
  BlizzUtils,
} = require('../../../../../blizzapi');

/** Regions */

router.get('/getAllRegions', (req, res) => {
  res.json(BlizzUtils.getAllRegions());
});

router.get('/getAllRegionIds', (req, res) => {
  res.json(BlizzUtils.getAllRegionIds());
});

router.get('/getAllRegionNames', (req, res) => {
  res.json(BlizzUtils.getAllRegionNames());
});

router.get('/getRegionNameById/:regionId', (req, res) => {
  const {
    regionId,
  } = req.params;
  const {
    paramType,
  } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId);
  res.json(BlizzUtils.getRegionNameById(regionIdParam));
});

router.get('/getRegionIdByName/:regionName', (req, res) => {
  const {
    regionName,
  } = req.params;
  res.json(BlizzUtils.getRegionIdByName(regionName));
});

router.get('/validateRegionId/:regionId', (req, res) => {
  const {
    regionId,
  } = req.params;
  res.json(BlizzUtils.validateRegionId(regionId));
});

router.get('/validateRegionName/:regionName', (req, res) => {
  const {
    regionName,
  } = req.params;
  res.json(BlizzUtils.validateRegionName(regionName));
});

/** Locales */

router.get('/getAllLocales', (req, res) => {
  res.json(BlizzUtils.getAllLocales());
});

router.get('/getAllLocaleNames', (req, res) => {
  res.json(BlizzUtils.getAllLocaleNames());
});

router.get('/getLocalesByRegionId/:regionId', (req, res) => {
  const {
    regionId,
  } = req.params;
  const {
    paramType,
  } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId);
  res.json(BlizzUtils.getLocalesByRegionId(regionIdParam));
});

router.get('/checkIfLocaleLooksValid/:locale', (req, res) => {
  const {
    locale,
  } = req.params;
  res.json(BlizzUtils.checkIfLocaleLooksValid(locale));
});

router.get('/validateLocale/:locale', (req, res) => {
  const {
    locale,
  } = req.params;
  res.json(BlizzUtils.validateLocale(locale));
});

router.get('/isLocaleValidForRegionId/:locale/:regionId', (req, res) => {
  const {
    locale,
    regionId,
  } = req.params;
  res.json(BlizzUtils.isLocaleValidForRegionId(locale, regionId));
});

/** Default locales */

router.get('/getAllDefaultLocaleIndexes', (req, res) => {
  res.json(BlizzUtils.getAllDefaultLocaleIndexes());
});

router.get('/getAllDefaultLocaleNames', (req, res) => {
  res.json(BlizzUtils.getAllDefaultLocaleNames());
});

router.get('/getDefaultLocaleIndexForRegionId/:regionId', (req, res) => {
  const {
    regionId,
  } = req.params;
  const {
    paramType,
  } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId);
  res.json(BlizzUtils.getDefaultLocaleIndexForRegionId(regionIdParam));
});

router.get('/getDefaultLocaleNameForRegionId/:regionId', (req, res) => {
  const {
    regionId,
  } = req.params;
  const {
    paramType,
  } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId);
  res.json(BlizzUtils.getDefaultLocaleNameForRegionId(regionIdParam));
});

/** SC2 realms */

router.get('/getAllSc2Realms', (req, res) => {
  res.json(BlizzUtils.getAllSc2Realms());
});

router.get('/getAllAvailableSc2Realms', (req, res) => {
  res.json(BlizzUtils.getAllAvailableSc2Realms());
});

router.get('/getSc2RealmsByRegionId/:regionId', (req, res) => {
  const {
    regionId,
  } = req.params;
  const {
    paramType,
  } = req.query.paramType || 'number';
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId, 10);
  res.json(BlizzUtils.getSc2RealmsByRegionId(regionIdParam));
});

router.get('/checkIfSc2RealmLooksValid/:sc2Realm', (req, res) => {
  const {
    sc2Realm,
  } = req.params;
  res.json(BlizzUtils.checkIfSc2RealmLooksValid(sc2Realm));
});

router.get('/validateSc2Realm/:sc2Realm', (req, res) => {
  const {
    sc2Realm,
  } = req.params;
  res.json(BlizzUtils.validateSc2Realm(sc2Realm));
});

router.get('/isSc2RealmValidForRegionId/:sc2Realm/:regionId', (req, res) => {
  const {
    sc2Realm,
    regionId,
  } = req.params;
  res.json(BlizzUtils.isSc2RealmValidForRegionId(sc2Realm, regionId));
});

/** Region API hosts */

router.get('/getAllApiHosts', (req, res) => {
  res.json(BlizzUtils.getAllApiHosts());
});

router.get('/getApiHostByRegionId/:regionId', (req, res) => {
  const {
    regionId,
  } = req.params;
  res.json(BlizzUtils.getApiHostByRegionId(regionId));
});

router.get('/getApiHostByRegionName/:regionName', (req, res) => {
  const {
    regionName,
  } = req.params;
  res.json(BlizzUtils.getApiHostByRegionName(regionName));
});

/** OAuth authorize uris */

router.get('/getAllAuthorizeUris', (req, res) => {
  res.json(BlizzUtils.getAllAuthorizeUris());
});

router.get('/getAuthorizeUriByRegionId/:regionId', (req, res) => {
  const {
    regionId,
  } = req.params;
  res.json(BlizzUtils.getAuthorizeUriByRegionId(regionId));
});

router.get('/getAuthorizeUriByRegionName/:regionName', (req, res) => {
  const {
    regionName,
  } = req.params;
  res.json(BlizzUtils.getAuthorizeUriByRegionName(regionName));
});

/** OAuth token uris */

router.get('/getAllTokenUris', (req, res) => {
  res.json(BlizzUtils.getAllTokenUris());
});

router.get('/getTokenUriByRegionId/:regionId', (req, res) => {
  const {
    regionId,
  } = req.params;
  res.json(BlizzUtils.getTokenUriByRegionId(regionId));
});

router.get('/getTokenUriByRegionName/:regionName', (req, res) => {
  const {
    regionName,
  } = req.params;
  res.json(BlizzUtils.getTokenUriByRegionName(regionName));
});

/** OAuth check token uris */

router.get('/getAllCheckTokenUris', (req, res) => {
  res.json(BlizzUtils.getAllCheckTokenUris());
});

router.get('/getCheckTokenUriByRegionId/:regionId', (req, res) => {
  const {
    regionId,
  } = req.params;
  res.json(BlizzUtils.getCheckTokenUriByRegionId(regionId));
});

router.get('/getCheckUriByRegionName/:regionName', (req, res) => {
  const {
    regionName,
  } = req.params;
  res.json(BlizzUtils.getCheckTokenUriByRegionName(regionName));
});


module.exports = router;