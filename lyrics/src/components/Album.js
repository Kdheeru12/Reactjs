import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { TextField, FormControl, FormHelperText, FormLabel } from '@material-ui/core';
import {Context, GlobalProvider} from '../context/State'
import { useState,useContext,useEffect} from 'react';
import React from 'react';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(0),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album() {
  const classes = useStyles();
  const {lyrics,hello} = useContext(Context)
  const {heading} = useContext(Context)
  const [search, setsearch] = useState('');
  const [searched, setsearched] = useState([]);

  function hi(e){
    e.preventDefault();
    const searches = async () =>{
      const  searc = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${search}&page_size=10&page=1&s_track_rating=desc&apikey=399e7bdc935fe00a60212d0c02620698`)
        //console.log(song.data.message.body)
        hello(searc.data.message.body.track_list);
    }
   searches()
  }
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            {heading}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {heading}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <form onSubmit = {hi}>
                  <FormLabel></FormLabel>
                  
                  <TextField value={search} id="outlined-basic" onChange={(e) => {setsearch(e.target.value)} } label="Search*"  color ='secondary'variant="outlined" />
                {' '}

                  <Button type='submit' size="small" color="primary">
                      View
                    </Button>
                </form>
                
                </Grid>
           
              </Grid>
           
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
               {
                  lyrics.map(song =>(
                  //console.log(song.track.track_id)
                  <Grid item key={song.track.track_id} xs={12} sm={6} md={4}>
                
            
                  <Card>
    
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {song.track.album_name}
                      </Typography>
                      <Typography>
                       {song.track.artist_name}

                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button href={`lyrics/${song.track.track_id}`} size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                  
                </Grid>
                  ))
                }
 
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}