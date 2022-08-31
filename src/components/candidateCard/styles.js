import { makeStyles } from '@mui/styles';
import * as colors from '../../colors';
import theme from '../../theme';

export const useStyles = makeStyles(() => ({
  root: {
    [theme.breakpoints.up('xl')]: {
      width: 1200,
      maxWidth: '1300px',
    },
    [theme.breakpoints.down('xl')]: {
      width: 1000,
      maxWidth: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      width: '100%',
      flexDirection: 'column',
    },
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${colors.lightEarl}`,
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '15px',
    backgroundColor: colors.white,
  },
  topSection: {
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px',
      flexDirection: 'column',
    },
    display: 'flex',
    padding: '20px 20px 20px 20px',
  },
  topSectionAvatar: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 20,
      marginBottom: 20,
    },
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    position: 'relative',
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: 120,
    marginBottom: 0,
  },
  avatarLevel: {
    [theme.breakpoints.down('sm')]: {
      left: 65,
    },
    [theme.breakpoints.down('md')]: {
      left: 75,
    },
    [theme.breakpoints.up('md')]: {
      right: 165,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '4px solid white',
    width: 40,
    height: 40,
    bottom: 5,
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: '#4903E2',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomSection: {
    [theme.breakpoints.down('sm')]: {
      height: 150,
      flexDirection: 'column',
    },
    display: 'flex',
    height: '80px',
    width: '100%',
    alignItems: 'center',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(196, 196, 196, 0) 5%)',
  },
  left: {
    [theme.breakpoints.down('md')]: {
      borderRight: 'none',
      width: '100%',
      marginBottom: '20px',
    },
    width: '70%',
    borderRight: '1px solid #D8D8D8',
    paddingTop: '44px',
    paddingBottom: '16px',
    paddingLeft: '40px',
    paddingRight: '30px',
    boxSizing: 'border-box',
  },
  right: {
    [theme.breakpoints.down('md')]: {
      borderTop: '1px solid #D8D8D8',
      width: '100%',
    },
    paddingBottom: '16px',
    paddingLeft: '30px',
    paddingRight: '30px',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardHeader: {
    display: 'flex',
    width: '100%',
  },
  profilePicWrapper: {
    height: '110px',
    position: 'relative',
  },
  photo: {
    width: 110,
    height: 110,
    top: '5px',
  },
  candidateName: {
    fontSize: '24px',
    lineHeight: '24px',
    whiteSpace: 'nowrap',
    top: '20.22px',
  },
  newTag: {
    backgroundColor: colors.black,
    color: colors.white,
    fontWeight: '700',
    letterSpacing: '3px',
    width: '76px',
    padding: '5px 8px',
    textAlign: 'center',
    marginLeft: '24px',
  },
  newTagName: {
    fontSize: '12px',
    lineHeight: '24px',
    paddingLeft: '10px',
    paddingRight: '0px',
    width: '100%',
    flexWrap: 'wrap',
  },
  profileDetails: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
      marginLeft: 0,
    },
    marginLeft: '20px',
    flexBasis: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
  },
  profileTop: {
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      marginRight: 0,
    },
    display: 'flex',
    height: '30px',
  },
  profileTopLeft: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: 'auto',
      width: 'auto',
    },
    [theme.breakpoints.only('sm')]: {
      flexDirection: 'row',
    },
    display: 'flex',
  },
  profileTopBadge: {
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: 0,
    },
    display: 'flex',
    flexDirection: 'column',
    whiteSpace: 'nowrap',
    marginLeft: 0,
  },
  dateText: {
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
    alignItems: 'center',
    background: '#111111',
    color: '#f2f2f2',
    borderRadius: 16,
    display: 'flex',
    height: 24,
    justifyContent: 'center',
    fontSize: 11,
    fontFamily: 'Basis Grotesque Pro',
    fontWeight: 'bold',
    padding: '0 12px',
    width: 110,
    marginTop: 10,
  },
  profileBadgeGreen: {
    background: '#E5F9F3',
    color: '#045a36',
    fontWeight: 'normal',
  },
  profileBadgeGray: {
    background: '#f2f2f2',
    color: '#000000',
    fontWeight: 'normal',
  },
  headline: {
    lineHeight: '24px',
    fontSize: '16px',
    margin: '20px 0px',
  },
  skills: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft: 7,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '30px',
    },
    display: 'flex',
    marginLeft: '140px',
    paddingBottom: '10px',
    justifyContent: 'space-between',
  },
  story: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    marginTop: '20px',
    fontSize: '14px',
  },
  middleTop: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    width: '70%',
  },
  middleBottom: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
      width: '100%',
    },
    width: '30%',
    paddingTop: 10,
  },
  resume: {
    color: colors.darkEarl,
    fontSize: '16px',
    lineHeight: '24px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  storyHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));