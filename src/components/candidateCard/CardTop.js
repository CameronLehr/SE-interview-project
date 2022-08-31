import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import { 
  convertLiveDateToString,
  convertLevelToString,
  convertLevelToJobLevel,
} from '../../lib/helpers';
import { useStyles } from './styles';


const CardTop = ({ candidate }) => {
  const classes = useStyles();
  const currentTime = Date.now();
  const liveDate = new Date(candidate?.liveDate) || new Date();
  const daysSinceLive = Math.floor(currentTime - liveDate.valueOf() / (24 * 60 * 60 * 1000));
  const dateBadge = convertLiveDateToString(daysSinceLive);

  return (
    <>
      <div className={classes.topSection} style={{
          display: 'flex',
          padding: '20px 20px 20px 20px',
        }}
      >
        <div className={classes.topSectionAvatar}>
          <div
            onClick={() => {
              console.log('clicked!')
            }}
            className={classes.avatar}
          >
            {candidate.level && (
              <Avatar
                alt={candidate?.name}
                src={candidate?.photoURL || null}
                className={classes.photo}
              />
            )}
            {!candidate.level && (
              <Avatar alt={candidate?.name} src={candidate?.photoURL || null} className={classes.photo} />
            )}
            {candidate.level && <div className={classes.avatarLevel}>{candidate.level}</div>}
          </div>
          {candidate.level && (
            <div className={classes.candidateLevelModal}>
              <div className={classes.levelOverlayArrow}></div>
              <div>
                <div className={classes.levelOverlayH3}>
                  <h3 style={{ fontSize: 14 }}> Shift Level: {convertLevelToString(candidate?.level)}</h3>
                </div>
                <p style={{ width: 257, margin: '0 16px 16px 16px', fontSize: 14, lineHeight: '140%' }}>
                  {' ' + candidate?.name}
                  {convertLevelToJobLevel(candidate?.level)}
                </p>
              </div>
            </div>
          )}
          <div className={classes.profileTopBadge}>
            <div className={classes.dateText}>{dateBadge}</div>
            <div style={{height: 10}}></div>
            <Stack direction="row" spacing={1}>
              {candidate?.hasSkillbridge && <Chip size="small" variant="green" label="Skillbridge Eligible" />}
              {(candidate?.category?.includes('MBA') || candidate?.hasMba) && (
                <Chip size="small" variant="green" label="Veteran With MBA" />
              )}
            </Stack>
          </div>
        </div>
        <div className={classes.profileDetails}>
          <h3 className={classes.candidateName} style={{ whiteSpace: 'nowrap', paddingTop: '20px', paddingBottom: 15 }}>
            {candidate.name}
          </h3>
          <p style={{ marginTop: 0, lineHeight: '24px' }}>
            {' '}
            <b>Recommended roles:</b> {candidate.recommendedRoles?.join(', ')}
          </p>
          {candidate?.hasSkillbridge && (
            <p style={{ marginTop: 0, lineHeight: '24px' }}>
              <b>Skillbridge eligibility window: </b>
              {candidate?.skillBridgeStartDate && candidate?.skillBridgeEndDate ? (
                candidate?.skillBridgeStartDate + ' - ' + candidate?.skillBridgeEndDate
              ) : (
                <i>Confirming this candidate&apos;s specific window</i>
              )}
            </p>
          )}
          <p style={{ marginTop: 0, lineHeight: '24px' }}>
            <strong>Current location:</strong>{' '}
            {candidate?.userLocation?.city && candidate?.userLocation?.state ? (
              `${candidate.userLocation.city}, ${candidate.userLocation.state}`
            ) : (
              <em>Confirming this candidate&apos;s current location</em>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardTop;
