import { bool } from '@polkadot/types';
import * as createTypeModule from '@polkadot/types/create/createType';
import { Balance, Moment } from '@polkadot/types/interfaces';
import { ISubmittableResult } from '@polkadot/types/types';
import BigNumber from 'bignumber.js';
import {
  AssetIdentifier,
  AssetType,
  DocumentHash,
  DocumentName,
  DocumentUri,
  FundingRoundName,
  IdentifierType,
  IdentityId,
  Ticker,
  TokenName,
} from 'polymesh-types/types';
import sinon, { SinonStub } from 'sinon';

import { PostTransactionValue } from '~/base';
import { polkadotMockUtils } from '~/testUtils/mocks';
import { KnownTokenIdentifierType, KnownTokenType } from '~/types';

import {
  assetIdentifierToString,
  assetTypeToString,
  balanceToBigNumber,
  booleanToBool,
  boolToBoolean,
  dateToMoment,
  delay,
  documentHashToString,
  documentNameToString,
  documentToTokenDocument,
  documentUriToString,
  findEventRecord,
  fundingRoundNameToString,
  identifierTypeToString,
  identityIdToString,
  momentToDate,
  numberToBalance,
  serialize,
  stringToAssetIdentifier,
  stringToDocumentHash,
  stringToDocumentName,
  stringToDocumentUri,
  stringToFundingRoundName,
  stringToIdentityId,
  stringToTicker,
  stringToTokenName,
  tickerToDid,
  tickerToString,
  tokenDocumentToDocument,
  tokenIdentifierTypeToIdentifierType,
  tokenNameToString,
  tokenTypeToAssetType,
  unserialize,
  unwrapValues,
} from '../';

jest.mock(
  '@polkadot/api',
  require('~/testUtils/mocks/polkadot').mockPolkadotModule('@polkadot/api')
);
jest.mock('~/context', require('~/testUtils/mocks/polkadot').mockContextModule('~/context'));

describe('delay', () => {
  jest.useFakeTimers();

  test('should resolve after the supplied timeout', () => {
    const delayPromise = delay(5000);

    jest.advanceTimersByTime(5000);

    return expect(delayPromise).resolves.toBeUndefined();
  });
});

describe('serialize and unserialize', () => {
  const entityType = 'someEntity';

  const pojo1 = {
    foo: 'Foo',
    bar: 'Bar',
  };

  const inversePojo1 = {
    bar: 'Bar',
    foo: 'Foo',
  };

  const pojo2 = {
    baz: 'baz',
  };

  test('serialize returns the same unique id for the same pojo', () => {
    expect(serialize(entityType, pojo1)).toBe(serialize(entityType, pojo1));
    expect(serialize(entityType, pojo1)).toBe(serialize(entityType, inversePojo1));
  });

  test('serialize returns a different unique id for different pojos', () => {
    expect(serialize(entityType, pojo1)).not.toBe(serialize(entityType, pojo2));
  });

  test('unserialize recovers the serialized object', () => {
    expect(unserialize(serialize(entityType, pojo1))).toEqual(pojo1);
    expect(unserialize(serialize(entityType, inversePojo1))).toEqual(pojo1);
  });

  const errorMsg = 'Wrong ID format';

  test('unserialize throws an error if the argument has an incorrect format', () => {
    expect(() => unserialize('unformatted')).toThrowError(errorMsg);
  });

  test('unserialize throws an error if the serialized string is not valid JSON', () => {
    const fakeSerialized = Buffer.from('someEntity:nonJsonString').toString('base64');
    expect(() => unserialize(fakeSerialized)).toThrowError(errorMsg);
  });
});

describe('tickerToDid', () => {
  test('should generate the ticker did', () => {
    let ticker = 'someTicker';
    let result = tickerToDid(ticker);

    expect(result).toBe('0x51a5fed99b9d305ef26e6af92dd3dcb181a30a07dc5f075e260b82a92d48913c');

    ticker = 'otherTicker';
    result = tickerToDid(ticker);

    expect(result).toBe('0xae37fa10f763fa5d302c5999ac06897f1fcf383dcc9787f1ede189ba161d06a5');

    ticker = 'lastTicker';
    result = tickerToDid(ticker);

    expect(result).toBe('0xa643b102d0c58adb3d13a28ab260644f2d0b010dc73aab99a3802b843868ab64');
  });
});

describe('stringToIdentityId and identityIdToString', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('stringToIdentityId should convert a did string into an IdentityId', () => {
    const identity = 'IdentityObject';
    const fakeResult = ('type' as unknown) as IdentityId;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType
      .withArgs(context.polymeshApi.registry, 'IdentityId', identity)
      .returns(fakeResult);

    const result = stringToIdentityId(identity, context);

    expect(result).toBe(fakeResult);
  });

  test('identityIdToString should convert an IdentityId to a did string', () => {
    const fakeResult = 'IdentityString';
    const identityId = polkadotMockUtils.createMockIdentityId(fakeResult);

    const result = identityIdToString(identityId);
    expect(result).toBe(fakeResult);
  });
});

describe('numberToBalance and balanceToBigNumber', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('numberToBalance should convert a number to a polkadot Balance object', () => {
    const value = new BigNumber(100);
    const fakeResult = ('100' as unknown) as Balance;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType
      .withArgs(
        context.polymeshApi.registry,
        'Balance',
        value.multipliedBy(Math.pow(10, 6)).toString()
      )
      .returns(fakeResult);

    const result = numberToBalance(value, context);

    expect(result).toBe(fakeResult);
  });

  test('balanceToBigNumber should convert a polkadot Balance object to a BigNumber', () => {
    const fakeResult = 100;
    const balance = polkadotMockUtils.createMockBalance(fakeResult);

    const result = balanceToBigNumber(balance);
    expect(result).toEqual(new BigNumber(fakeResult).div(Math.pow(10, 6)));
  });
});

describe('stringToTicker and tickerToString', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('stringToTicker should convert a string to a polkadot Ticker object', () => {
    const value = 'someTicker';
    const fakeResult = ('convertedTicker' as unknown) as Ticker;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType.withArgs(context.polymeshApi.registry, 'Ticker', value).returns(fakeResult);

    const result = stringToTicker(value, context);

    expect(result).toBe(fakeResult);
  });

  test('tickerToString should convert a polkadot Ticker object to a string', () => {
    const fakeResult = 'someTicker';
    const ticker = polkadotMockUtils.createMockTicker(fakeResult);

    const result = tickerToString(ticker);
    expect(result).toEqual(fakeResult);
  });
});

describe('stringToTokenName and tokenNameToString', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('stringToTokenName should convert a string to a polkadot TokenName object', () => {
    const value = 'someName';
    const fakeResult = ('convertedName' as unknown) as TokenName;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType.withArgs(context.polymeshApi.registry, 'TokenName', value).returns(fakeResult);

    const result = stringToTokenName(value, context);

    expect(result).toEqual(fakeResult);
  });

  test('tokenNameToString should convert a polkadot TokenName object to a string', () => {
    const fakeResult = 'someTokenName';
    const tokenName = polkadotMockUtils.createMockTokenName(fakeResult);

    const result = tokenNameToString(tokenName);
    expect(result).toEqual(fakeResult);
  });
});

describe('booleanToBool and boolToBoolean', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('booleanToBool should convert a boolean to a polkadot bool object', () => {
    const value = true;
    const fakeResult = ('true' as unknown) as bool;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType.withArgs(context.polymeshApi.registry, 'bool', value).returns(fakeResult);

    const result = booleanToBool(value, context);

    expect(result).toEqual(fakeResult);
  });

  test('boolToBoolean should convert a polkadot bool object to a boolean', () => {
    const fakeResult = true;
    const mockBool = polkadotMockUtils.createMockBool(fakeResult);

    const result = boolToBoolean(mockBool);
    expect(result).toEqual(fakeResult);
  });
});

describe('dateToMoment and momentToDate', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('dateToMoment should convert a Date to a polkadot Moment object', () => {
    const value = new Date();
    const fakeResult = (10000 as unknown) as Moment;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType
      .withArgs(context.polymeshApi.registry, 'Moment', Math.round(value.getTime()))
      .returns(fakeResult);

    const result = dateToMoment(value, context);

    expect(result).toBe(fakeResult);
  });

  test('momentToDate should convert a polkadot Moment object to a Date', () => {
    const fakeResult = 10000;
    const moment = polkadotMockUtils.createMockMoment(fakeResult);

    const result = momentToDate(moment);
    expect(result).toEqual(new Date(fakeResult));
  });
});

describe('tokenTypeToAssetType and assetTypeToString', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('tokenTypeToAssetType should convert a TokenType to a polkadot AssetType object', () => {
    const value = KnownTokenType.Commodity;
    const fakeResult = ('CommodityEnum' as unknown) as AssetType;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType.withArgs(context.polymeshApi.registry, 'AssetType', value).returns(fakeResult);

    const result = tokenTypeToAssetType(value, context);

    expect(result).toBe(fakeResult);
  });

  test('assetTypeToString should convert a polkadot AssetType object to a string', () => {
    let fakeResult = KnownTokenType.Commodity;
    let assetType = polkadotMockUtils.createMockAssetType(fakeResult);

    let result = assetTypeToString(assetType);
    expect(result).toEqual(fakeResult);

    fakeResult = KnownTokenType.Equity;
    assetType = polkadotMockUtils.createMockAssetType(fakeResult);

    result = assetTypeToString(assetType);
    expect(result).toEqual(fakeResult);

    fakeResult = KnownTokenType.Debt;
    assetType = polkadotMockUtils.createMockAssetType(fakeResult);

    result = assetTypeToString(assetType);
    expect(result).toEqual(fakeResult);

    fakeResult = KnownTokenType.StructuredProduct;
    assetType = polkadotMockUtils.createMockAssetType(fakeResult);

    result = assetTypeToString(assetType);
    expect(result).toEqual(fakeResult);

    const fakeType = 'otherType';
    assetType = polkadotMockUtils.createMockAssetType({
      custom: polkadotMockUtils.createMockBytes(fakeType),
    });

    result = assetTypeToString(assetType);
    expect(result).toEqual(fakeType);
  });
});

describe('tokenIdentifierTypeToIdentifierType and identifierTypeToString', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('tokenIdentifierTypeToIdentifierType should convert a TokenIdentifierType to a polkadot IdentifierType object', () => {
    const value = KnownTokenIdentifierType.Isin;
    const fakeResult = ('IsinEnum' as unknown) as IdentifierType;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType
      .withArgs(context.polymeshApi.registry, 'IdentifierType', value)
      .returns(fakeResult);

    const result = tokenIdentifierTypeToIdentifierType(value, context);

    expect(result).toBe(fakeResult);
  });

  test('identifierTypeToString should convert a polkadot IdentifierType object to a string', () => {
    let fakeResult = KnownTokenIdentifierType.Isin;
    let identifierType = polkadotMockUtils.createMockIdentifierType(fakeResult);

    let result = identifierTypeToString(identifierType);
    expect(result).toEqual(fakeResult);

    fakeResult = KnownTokenIdentifierType.Cusip;
    identifierType = polkadotMockUtils.createMockIdentifierType(fakeResult);

    result = identifierTypeToString(identifierType);
    expect(result).toEqual(fakeResult);

    const fakeType = 'otherType';
    identifierType = polkadotMockUtils.createMockIdentifierType({
      custom: polkadotMockUtils.createMockBytes(fakeType),
    });

    result = identifierTypeToString(identifierType);
    expect(result).toEqual(fakeType);
  });
});

describe('stringToAssetIdentifier and assetIdentifierToString', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('stringToAssetIdentifier should convert a string to a polkadot AssetIdentifier object', () => {
    const value = 'someIdentifier';
    const fakeResult = ('convertedIdentifier' as unknown) as AssetIdentifier;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType
      .withArgs(context.polymeshApi.registry, 'AssetIdentifier', value)
      .returns(fakeResult);

    const result = stringToAssetIdentifier(value, context);

    expect(result).toBe(fakeResult);
  });

  test('assetIdentifierToString should convert a polkadot AssetIdentifier object to a string', () => {
    const fakeResult = 'someIdentifier';
    const identifierType = polkadotMockUtils.createMockAssetIdentifier(fakeResult);

    const result = assetIdentifierToString(identifierType);
    expect(result).toEqual(fakeResult);
  });
});

describe('stringToFundingRoundName and fundingRoundNameToString', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('stringToFundingRoundName should convert a string to a polkadot FundingRoundName object', () => {
    const value = 'someName';
    const fakeResult = ('convertedName' as unknown) as FundingRoundName;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType
      .withArgs(context.polymeshApi.registry, 'FundingRoundName', value)
      .returns(fakeResult);

    const result = stringToFundingRoundName(value, context);

    expect(result).toEqual(fakeResult);
  });

  test('fundingRoundNameToString should convert a polkadot FundingRoundName object to a string', () => {
    const fakeResult = 'someFundingRoundName';
    const roundName = polkadotMockUtils.createMockFundingRoundName(fakeResult);

    const result = fundingRoundNameToString(roundName);
    expect(result).toEqual(fakeResult);
  });
});

describe('stringToDocumentName and documentNameToString', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('stringToDocumentName should convert a string to a polkadot DocumentName object', () => {
    const value = 'someName';
    const fakeResult = ('convertedName' as unknown) as DocumentName;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType
      .withArgs(context.polymeshApi.registry, 'DocumentName', value)
      .returns(fakeResult);

    const result = stringToDocumentName(value, context);

    expect(result).toEqual(fakeResult);
  });

  test('documentNameToString should convert a polkadot DocumentName object to a string', () => {
    const fakeResult = 'someDocumentName';
    const docName = polkadotMockUtils.createMockDocumentName(fakeResult);

    const result = documentNameToString(docName);
    expect(result).toEqual(fakeResult);
  });
});

describe('stringToDocumentUri and documentUriToString', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('stringToDocumentUri should convert a string to a polkadot DocumentUri object', () => {
    const value = 'someUri';
    const fakeResult = ('convertedUri' as unknown) as DocumentUri;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType.withArgs(context.polymeshApi.registry, 'DocumentUri', value).returns(fakeResult);

    const result = stringToDocumentUri(value, context);

    expect(result).toEqual(fakeResult);
  });

  test('documentUriToString should convert a polkadot DocumentUri object to a string', () => {
    const fakeResult = 'someDocumentUri';
    const docUri = polkadotMockUtils.createMockDocumentUri(fakeResult);

    const result = documentUriToString(docUri);
    expect(result).toEqual(fakeResult);
  });
});

describe('stringToDocumentHash and documentHashToString', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('stringToDocumentHash should convert a string to a polkadot DocumentHash object', () => {
    const value = 'someHash';
    const fakeResult = ('convertedHash' as unknown) as DocumentHash;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType
      .withArgs(context.polymeshApi.registry, 'DocumentHash', value)
      .returns(fakeResult);

    const result = stringToDocumentHash(value, context);

    expect(result).toEqual(fakeResult);
  });

  test('documentHashToString should convert a polkadot DocumentHash object to a string', () => {
    const fakeResult = 'someDocumentHash';
    const docHash = polkadotMockUtils.createMockDocumentHash(fakeResult);

    const result = documentHashToString(docHash);
    expect(result).toEqual(fakeResult);
  });
});

describe('tokenDocumentToDocument and documentToTokenDocument', () => {
  let mockCreateType: SinonStub;

  beforeAll(() => {
    polkadotMockUtils.initMocks();
  });

  beforeEach(() => {
    mockCreateType = sinon.stub(createTypeModule, 'createType');
  });

  afterEach(() => {
    polkadotMockUtils.reset();
    mockCreateType.restore();
  });

  afterAll(() => {
    polkadotMockUtils.cleanup();
  });

  test('tokenDocumentToDocument should convert a TokenDocument to a polkadot Document object', () => {
    const name = 'someName';
    const uri = 'someUri';
    const contentHash = 'someHash';
    const value = {
      name,
      uri,
      contentHash,
    };
    const fakeResult = ('convertedDocument' as unknown) as Document;
    const context = polkadotMockUtils.getContextInstance();

    mockCreateType
      .withArgs(context.polymeshApi.registry, 'Document', {
        name: stringToDocumentName(name, context),
        uri: stringToDocumentUri(uri, context),
        // eslint-disable-next-line @typescript-eslint/camelcase
        content_hash: stringToDocumentHash(contentHash, context),
      })
      .returns(fakeResult);

    const result = tokenDocumentToDocument(value, context);

    expect(result).toEqual(fakeResult);
  });

  test('documentToTokenDocument should convert a polkadot Document object to a TokenDocument', () => {
    const name = 'someName';
    const uri = 'someUri';
    const contentHash = 'someHash';
    const fakeResult = {
      name,
      uri,
      contentHash,
    };
    const mockDocument = {
      name: polkadotMockUtils.createMockDocumentName(name),
      uri: polkadotMockUtils.createMockDocumentUri(uri),
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_hash: polkadotMockUtils.createMockDocumentHash(contentHash),
    };
    const doc = polkadotMockUtils.createMockDocument(mockDocument);

    const result = documentToTokenDocument(doc);
    expect(result).toEqual(fakeResult);
  });
});

describe('unwrapValues', () => {
  test('should unwrap all Post Transaction Values in the array', async () => {
    const values = [1, 2, 3, 4, 5];
    const wrapped = values.map(value => new PostTransactionValue(async () => value));
    await Promise.all(wrapped.map(postValue => postValue.run({} as ISubmittableResult)));

    const unwrapped = unwrapValues(wrapped);

    expect(unwrapped).toEqual(values);
  });
});

describe('findEventRecord', () => {
  const findRecordStub = sinon.stub();
  const mockReceipt = ({
    findRecord: findRecordStub,
  } as unknown) as ISubmittableResult;

  afterEach(() => {
    findRecordStub.reset();
  });

  test('returns the corresponding Event Record', () => {
    const mod = 'asset';
    const eventName = 'TickerRegistered';
    const fakeResult = 'event';
    findRecordStub.withArgs(mod, eventName).returns(fakeResult);

    const eventRecord = findEventRecord(mockReceipt, mod, eventName);

    expect(eventRecord).toBe(fakeResult);
  });

  test("throws if the Event wasn't fired", () => {
    const mod = 'asset';
    const eventName = 'TickerRegistered';
    findRecordStub.withArgs(mod, eventName).returns(undefined);

    expect(() => findEventRecord(mockReceipt, mod, eventName)).toThrow(
      `Event "${mod}.${eventName}" wasnt't fired even though the corresponding transaction was completed. Please report this to the Polymath team`
    );
  });
});