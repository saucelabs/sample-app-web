import { colors } from '../../src/utils/Colors';

export const style = {
  componentWrapper: {
    border: `1px solid ${colors.lightGray}`,
    margin: '20px auto',
    padding: 50,
    width: '75%',
  },
  grayComponentWrapper: {
    backgroundColor: colors.gray,
    border: `1px solid ${colors.lightGray}`,
    margin: '20px auto',
    padding: 50,
    width: '75%',
  },
  stateContainer: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    color: colors.gray,
    marginTop: 20,
  },
  stateWhiteContainer: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    color: colors.white,
    marginTop: 20,
  },
  lightText: {
    color: colors.lightGray,
  },
};
