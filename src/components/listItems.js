// import DashboardIcon from '@mui/icons-material/Dashboard';
// import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import * as React from 'react';
// import { useState } from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import Button from '@mui/material/Button';
// import axios from "axios";


// // Handles list of pages on sidebar. Edit if you want to add more pages

// export default function ListItems() {
//   const [open, setOpen] = useState(false);
//   const [results, setResults] = useState(null);

//   let r = new Array(5);
//   for (let i = 0; i < 5; i++) {
//     r[i] = Math.floor(Math.random() * 105);
//   }

//   const handleClickLearn = () => {
//     setOpen(true)
//     // find the data from the api
//     const options = {
//       method: 'GET',
//       url: 'https://climate-change-news-media.p.rapidapi.com/news',
//       headers: {
//         'X-RapidAPI-Key': '80cdebb798msh0879e36a8035d5ep16405djsnde0b9bafb7d3',
//         'X-RapidAPI-Host': 'climate-change-news-media.p.rapidapi.com'
//       }
//     };

//     axios.request(options).then(function (response) {
//       setResults(response.data)
//     }).catch(function (error) {
//       console.error(error);
//     });

//   }

//   const handleClose = () => {
//     setOpen(false)
//     setResults(null)
//   }

//   const mainListItems = (
//     <React.Fragment>
//       <ListItemButton>
//         <ListItemIcon>
//           <DashboardIcon />
//         </ListItemIcon>
//         <ListItemText primary="Dashboard" />
//       </ListItemButton>
  
//       <ListItemButton onClick={handleClickLearn}>
//         <ListItemIcon>
//           <LocalLibraryIcon />
//         </ListItemIcon>
//         <ListItemText primary="Learn More" />
//       </ListItemButton>
  
//     </React.Fragment>
//   );

//   const items = 
//     results != null ?
//       <ul>
//         <li>
//           <a href={results[r[0]].url}>{results[r[0]].title}</a>
//         </li>
//         <li>
//           <a href={results[r[1]].url}>{results[r[1]].title}</a>
//         </li>
//         <li>
//           <a href={results[r[2]].url}>{results[r[2]].title}</a>
//         </li>
//         <li>
//           <a href={results[r[3]].url}>{results[r[3]].title}</a>
//         </li>
//         <li>
//           <a href={results[r[4]].url}>{results[r[4]].title}</a>
//         </li>
//       </ul>
//       :null;


//   return(
//     <div>
//       <Dialog open={open}>
//         <DialogTitle>Learn More!</DialogTitle>
//         <DialogContent>
//           {items}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Exit</Button>
//         </DialogActions>
//       </Dialog>
//       {mainListItems}
//     </div>
//     )
// }
