import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Button, Typography } from "@chainsafe/common-components";
import clsx from "clsx"
import bg from './bg.mp4';

const useStyles = makeStyles(
  ({ constants, palette, breakpoints }: ITheme) => {
    return createStyles({
      container: {
        minHeight: "100vh",
        [breakpoints.up(1300)]: {
          height: "100%",
          paddingTop: "90px",
          paddingBottom: "90px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      video: {
        zIndex: -1,
        position: "fixed",
      },
      heroContentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem",
        [breakpoints.up('md')]: {
          alignItems: "center",
        },
        [breakpoints.down('sm')]: {
          alignItems: "flex-start",
          padding: "10rem 2rem"
        },
      },
      bold: {
        fontWeight: "bolder",
      },
      white: {
        color: palette.common.white.main,
      },
      singleColText: {
        [breakpoints.up('md')]: {
          textAlign: "center",
        },
        [breakpoints.down('md')]: {
          textAlign: "left"
        },
        maxWidth: 600,
      },
      titleText: {
        textAlign: "center",
        maxWidth: "800px",
        fontFamily: "Major Mono Display",
        [breakpoints.down("md")]: {
          textAlign: "left",
          fontSize: "56px",
          lineHeight: "63px",
        }
      },
      buttonGroup: {
        display: "flex",
      },
      noUnderline: {
        textDecoration: "none",
      },
      lightButton: {
        background: palette.primary.main,
        color: palette.common.white.main,
        fontSize: "18px",
        lineHeight: "26px",
        marginRight: constants.generalUnit * 2,
        padding: constants.generalUnit,
        transition: "all ease-in-out 0.2s",
        "&:hover, &:active, &:focus": {
          background: palette.additional["gray"][9],
        }
      },
      darkButton: {
        background: palette.additional["gray"][9],
        color: palette.common.white.main,
        fontSize: "18px",
        lineHeight: "26px",
        padding: constants.generalUnit,
        transition: "all ease-in-out 0.2s",
        "&:hover, &:active, &:focus": {
          background: palette.primary.main,
        }
      }
    })
  })

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <video autoPlay loop muted className={classes.video}>
        <source src={bg} type="video/mp4"/>
      </video>
      <section>
      </section>
      <div className={classes.heroContentContainer}>
        <Typography variant="h1" className={clsx(classes.titleText, classes.white)}>
          indao
        </Typography>
        <br />
        <br />
        <div className={classes.buttonGroup}>
          <Button size="large" variant="danger" className={clsx(classes.bold, classes.lightButton)}
          >
            <a className={clsx(classes.noUnderline, classes.white)} href="https://cloudflare-ipfs.com/ipfs/QmT7APAyZLDpLJdhUuWW5E27NjxNHUyRdMfQNrR7jumiaF/" rel="noopener noreferrer" target="_blank">
              Start Game
            </a>
          </Button>
          <Button size="large" variant="danger" className={clsx(classes.bold, classes.darkButton)}>
            <a className={clsx(classes.white, classes.noUnderline)} href="https://discord.gg/FssaUnrKG5" rel="noopener noreferrer" target="_blank">
              Join Discord
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomePage;