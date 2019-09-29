import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PieChart from "highcharts-react-official";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Pinguin from './p.png';
import Pinguin1 from './egg.gif';
import Pinguin2 from './eggstwo.gif';
import Pinguin3 from './eggsthree.gif';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import TransportationIcon from '@material-ui/icons/EmojiTransportation';
import HauseIcon from '@material-ui/icons/House';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';
import EcoIcon from '@material-ui/icons/Eco';
import UpIcon from '@material-ui/icons/ArrowUpward';
import DownIcon from '@material-ui/icons/ArrowDownward';
import Cup from '@material-ui/icons/EmojiEvents';

import Divider from '@material-ui/core/Divider';

import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckIcon from '@material-ui/icons/Check';
import Checkbox from '@material-ui/core/Checkbox';

import P1 from './1.jpg';
import P2 from './2.jpg';
import P3 from './3.jpg';
import P4 from './4.jpg';
import Hatched from './hatched.gif';
import Pinguins2 from './pinguins2.gif';
import Island from './island.png';

import Chip from '@material-ui/core/Chip';

// Import Highcharts
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";

class App extends React.Component {
   constructor() {
      super();
      this.state = {
        pinguins:Pinguin1,
		noOfPinguins:1,
		state:1,
		people:1,
		tooltip:[false,false,false,false],
		friends:[false,false,false,false],
		 target :[0.3,0.25,0.2,0.25,0.1],
		
		optionsGauge : {
  chart: {
        type: 'solidgauge',
        height: '50%',

       
    },
  title: {
        text: 'Your carbon reduction goals',
        style: {
            fontSize: '24px'
        }
    },
tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },
pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },
	series: [{
        name: 'Move',
		
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 0.3*100
        }]
    }, {
        name: 'Exercise',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y:0.25*100
        }]
    }, {
        name: 'Stand',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y:0.2*100
        }]
    }]
},
		
   
   }
this.handleChange = this.handleChange.bind(this);
this.handleClick = this.handleClick.bind(this);
this.handleCloseOpen = this.handleCloseOpen.bind(this);
this.handleToggle=this.handleToggle.bind(this);
this.generateOptionsGauge=this.generateOptionsGauge.bind(this);
   }
   
         handleClick(event) {
			 var tmpState=this.state.state;
			 tmpState= tmpState+1;
		   this.setState({state: tmpState});

}

generateOptionsGauge(state,user){
 return	 {
  chart: {
        type: 'solidgauge',
        height: '30%',

       
    },
  title: {
        text: user+' reduction goals',
        style: {
            fontSize: '24px'
        }
    },
tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },
pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },
	series: [{
        name: 'Move',
		
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y:(Math.floor(Math.random() * 5) + 1)*10*state
        }]
    }, {
        name: 'Exercise',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y:(Math.floor(Math.random() * 5) + 1)*10*state
        }]
    }, {
        name: 'Stand',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y:(Math.floor(Math.random() *5) + 1)*10*state
        }]
    }]
};
}

 handleCloseOpen(sender) {
	 
			 var tmpState=this.state.tooltip;
			 if(tmpState[sender]==true){
				 tmpState[sender]=false;
				
			 }else{
				 tmpState[sender]=true;
			 }
		   		   this.setState({tooltip: tmpState});
		   
		   console.log(sender);

}
   
handleToggle(value){
	    var tmpState=this.state.friends;
			 if(tmpState[value]==true){
				 tmpState[value]=false;
				   var tmppeople=this.state.people;
					tmppeople= tmppeople-1;

			 }else{
				 tmpState[value]=true;
				  var tmppeople=this.state.people;
			 tmppeople= tmppeople+1;
			 }
			 
			 var tempoptionsGauge = {
  chart: {
        type: 'solidgauge',
        height: '50%',

       
    },
  title: {
        text: 'Your carbon reduction goals',
        style: {
            fontSize: '24px'
        }
    },
tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },
pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },
	series: [{
        name: 'Mobility',
		
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y:  this.state.target[0]/this.state.people*100
        }]
    }, {
        name: 'Household',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y:this.state.target[1]/this.state.people*100
        }]
    }, {
        name: 'Food',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y:this.state.target[2]/this.state.people*100
        }]
    }]
};
			 
				
			 
			 
		   this.setState({friends: tmpState,people:tmppeople,optionsGauge:tempoptionsGauge});
		   
		   
		   
		   console.log(value);
	   
   }
   
      handleChange(event,value) {
		  
		  if(value===1){
			   this.setState({pinguins: Pinguin1,noOfPinguins:1});
		  }else if(value===2){
			   this.setState({pinguins: Pinguin2,noOfPinguins:2});
		  }else{
			  this.setState({pinguins: Pinguin3,noOfPinguins:3});
		  }
}
   
   
   render() {
	   const target =this.state.target;
	   const state = this.state.state;
	   const tooltip = this.state.tooltip;
	   let display;
	   
	   const names = ["Peter","Bob","Nicole","Dora"];

	   var pictures=[P1,P2,P3,P4];
	   
	   
	   
	   if (state===1) {
      display=
 <Grid container spacing={3}>
			 
   <Grid item xs={3}>
			<Typography id="discrete-slider" gutterBottom>
        Select the number of penguins you want to save
      </Typography>
     
			
			

           <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
		onChange={this.handleChange}
      />
        </Grid>
			  <Grid item xs={6}>
			  <div> </div>
			  </Grid>
			  
			   <Grid item xs={6}>

			    {<img style={{width: 500}} src={this.state.pinguins}/>}
		
			  </Grid>
			  <Grid item xs={6}>
			  <div> </div>
			  </Grid>
			  <Grid item xs={6}>
			  	<Button variant="contained" color="primary" onClick={this.handleClick}>
        Show me how 
      </Button>
			  </Grid>
			  			  <Grid item xs={6}>
			  <div> </div>
			  </Grid>
		</Grid>
    } else if (state==2){
     display=
	 
	  <Grid container spacing={3}>
<Grid item xs={6}>
you plan to save {this.state.noOfPinguins} pinguins.
          <PieChart  highcharts={Highcharts} options={options} />
        </Grid>
		 <Grid item xs={6}>
		 {'\u00A0'}
          <PieChart  highcharts={Highcharts} options={optionsExpensis} />
        </Grid>
		<Grid item xs={8}>
		<Table  size="small">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align="right">Expense</TableCell>
              <TableCell align="right">Carbon</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.expense}</TableCell>
                <TableCell align="right">{row.carbon}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
		</Grid>
		
		<Grid item xs={6}>
							  	<Button variant="contained" color="primary" onClick={this.handleClick}>
        Start the challange 
      </Button>
	  </Grid>
      		</Grid>
			
    }else if (state===3){
		
				  highchartsMore(Highcharts);
solidGauge(Highcharts);
     display=
	 	 
	 <Grid container spacing={3}>
   <Grid item xs={6}>
   
    <List>

	
      <ListItem button onClick={()=>this.handleCloseOpen(0)}>
        <ListItemAvatar>
          <Avatar>
            <TransportationIcon />
          </Avatar>
        </ListItemAvatar>
		<DownIcon  color="error"/>
        <ListItemText primary="Mobility" secondary={ Math.round(target[0]/this.state.people*100 * 100) / 100  +'%'} />
		{tooltip[0] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
	  <Collapse in={tooltip[0]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Take the train 2x week to work instead of car" />
          </ListItem>
        </List>
      </Collapse>
	  <Collapse in={tooltip[0]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Use only bike on weekends instead of car or public transport" />
          </ListItem>
        </List>
      </Collapse>
	 <Collapse in={tooltip[0]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Take the train instead of plane for short distance journeys" />
          </ListItem>
        </List>
      </Collapse>
	  	 <Collapse in={tooltip[0]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Offer carpooling to your colleagues" />
          </ListItem>
        </List>
      </Collapse>
	  	 <Collapse in={tooltip[0]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Adjust your driving style - no need for cool speeding ;)" />
          </ListItem>
        </List>
      </Collapse>
	  	 <Collapse in={tooltip[0]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Properly inflate tires to improve your gas mileage by up to 3%" />
          </ListItem>
        </List>
      </Collapse>
	  	 <Collapse in={tooltip[0]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Offset your plane/car travels - pick your project here - spend will be recorded as saving" />
          </ListItem>
        </List>
      </Collapse>
	  <Divider />
	        <ListItem button onClick={()=>this.handleCloseOpen(1)}>
        <ListItemAvatar>
          <Avatar>
            <TransportationIcon />
          </Avatar>
        </ListItemAvatar>
		<DownIcon  color="error"/>
       <ListItemText primary="Household" secondary={ Math.round(target[1]/this.state.people*100 * 100) / 100 +'%'} />
		{tooltip[1] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
	  <Collapse in={tooltip[1]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Unplug your unused devices" />
          </ListItem>
        </List>
      </Collapse>
	  	  <Collapse in={tooltip[1]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Turn off lights you’re not using and when you leave the room" />
          </ListItem>
        </List>
      </Collapse>
	  	  <Collapse in={tooltip[1]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Use the energy saving mode on your dishwasher" />
          </ListItem>
        </List>
      </Collapse>
	    	  <Collapse in={tooltip[1]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Implement smart thermostats" />
          </ListItem>
        </List>
      </Collapse>
	  	    	  <Collapse in={tooltip[1]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Use less water for daily showers, for watering your garden, for washing your car" />
          </ListItem>
        </List>
      </Collapse>
	    	    	  <Collapse in={tooltip[1]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Make energy efficiency a primary consideration when choosing new appliances" />
          </ListItem>
        </List>
      </Collapse>
	  <Divider />
	  <ListItem button onClick={()=>this.handleCloseOpen(2)}>
        <ListItemAvatar>
          <Avatar>
            <FastfoodIcon />
          </Avatar>
        </ListItemAvatar>
		<DownIcon  color="error"/>
       <ListItemText primary="Food" secondary={ Math.round(target[2]/this.state.people*100 * 100) / 100 +'%'} />
		{tooltip[2] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
	  <Collapse in={tooltip[2]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Reduce foodwaste by buying less and only necessary items" />
          </ListItem>
        </List>
      </Collapse>
	 	  <Collapse in={tooltip[2]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Buy from too-good-to go to save food and save money" />
          </ListItem>
        </List>
      </Collapse>
	  	 	  <Collapse in={tooltip[2]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Bring your own reusable bags and shop plastic bag free" />
          </ListItem>
        </List>
      </Collapse>
	  <Divider />
	  <ListItem button onClick={()=>this.handleCloseOpen(3)}>
        <ListItemAvatar>
          <Avatar>
            <ShoppingIcon />
          </Avatar>
        </ListItemAvatar>
		<DownIcon  color="error"/>
       <ListItemText primary="Goods" secondary={ Math.round(target[3]/this.state.people*100 * 100) / 100 +'%'} />
		{tooltip[3] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
	  <Collapse in={tooltip[3]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Reduce foodwaste by buying less and only necessary items" />
          </ListItem>
        </List>
      </Collapse>
	  	  <Collapse in={tooltip[3]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Buy second-hand clothes" />
          </ListItem>
        </List>
      </Collapse>
	    	  <Collapse in={tooltip[3]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Organize clothes swapping with your friends" />
          </ListItem>
        </List>
      </Collapse>
	  	    	  <Collapse in={tooltip[3]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Buy items online at once and not one by one to save on packaging" />
          </ListItem>
        </List>
      </Collapse>
	  <Divider />
	  <Divider />
    </List>
 
	 	  </Grid>
		  			  	
		  
		  




<Grid item xs={6}>
<HighchartsReact
highcharts={Highcharts}
options={this.state.optionsGauge}
ref="chartComponent1"/>
</Grid>
		  <Grid item xs={6}>
		      <List dense >
      {[0, 1, 2, 3].map(value => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={pictures[value]}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={names[value]} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={()=>this.handleToggle(value)}
                checked={this.state.friends[value] !== false}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
	</Grid>	<Grid item xs={6}>
	<div></div>
	</Grid>	
			<Grid item xs={6}>
							  	<Button variant="contained" color="primary" onClick={this.handleClick}>
        Start the challange 
      </Button>			
</Grid>	  
      		</Grid>
			

			

	}else if (state===4){

highchartsMore(Highcharts);
solidGauge(Highcharts);
display=

<Grid container spacing={3}>
<Grid item xs={6}>
<HighchartsReact
highcharts={Highcharts}
options={optionsGauge}
ref="chartComponent1"/>
</Grid>
<Grid item xs={6}>
 {<img style={{width: 600}} src={Hatched}/>}
	</Grid>	


	<Grid item xs={6}>
	<Paper>
	<Avatar
                alt={`Avatar n°${0 + 1}`}
                src={pictures[0]}
              />
<HighchartsReact
highcharts={Highcharts}
options={this.generateOptionsGauge(1,"Peter")}
ref="chartComponent1"/>
</Paper>
</Grid>

	<Grid item xs={6}>
	<Paper>
	<Avatar
                alt={`Avatar n°${1 + 1}`}
                src={pictures[1]}
              />
<HighchartsReact
highcharts={Highcharts}
options={this.generateOptionsGauge(1,"Bob")}
ref="chartComponent1"/>
</Paper>
</Grid>

	<Grid item xs={6}>
	<Paper>
	<Avatar
                alt={`Avatar n°${2 + 1}`}
                src={pictures[2]}
              />
<HighchartsReact
highcharts={Highcharts}
options={this.generateOptionsGauge(1,"Nicole")}
ref="chartComponent1"/>
</Paper>
</Grid>

	<Grid item xs={6}>
	<Paper>
	<Avatar
                alt={`Avatar n°${3 + 1}`}
                src={pictures[3]}
              />
<HighchartsReact
highcharts={Highcharts}
options={this.generateOptionsGauge(1,"Dora")}
ref="chartComponent1"/>
</Paper>
</Grid>
				<Grid item xs={6}>
							  	<Button variant="contained" color="primary" onClick={this.handleClick}>
        Finish the challange 
      </Button>			
</Grid>	 
</Grid>


	}else if (state===5){

highchartsMore(Highcharts);
solidGauge(Highcharts);
display=

<Grid container spacing={3}>
<Grid item xs={6}>
<HighchartsReact
highcharts={Highcharts}
options={optionsGauge2}
ref="chartComponent1"/>
</Grid>
<Grid item xs={6}>
 {<img style={{width: 600}} src={Pinguins2}/>}
	</Grid>	


	<Grid item xs={6}>
	<Paper>
	<Avatar
                alt={`Avatar n°${0 + 1}`}
                src={pictures[0]}
              />
<HighchartsReact
highcharts={Highcharts}
options={this.generateOptionsGauge(2,"Peter")}
ref="chartComponent1"/>
</Paper>
</Grid>

	<Grid item xs={6}>
	<Paper>
	<Avatar
                alt={`Avatar n°${1 + 1}`}
                src={pictures[1]}
              />
<HighchartsReact
highcharts={Highcharts}
options={this.generateOptionsGauge(2,"Bob")}
ref="chartComponent1"/>
</Paper>
</Grid>

	<Grid item xs={6}>
	<Paper>
	<Avatar
                alt={`Avatar n°${2 + 1}`}
                src={pictures[2]}
              />
<HighchartsReact
highcharts={Highcharts}
options={this.generateOptionsGauge(2,"Nicole")}
ref="chartComponent1"/>
</Paper>
</Grid>

	<Grid item xs={6}>
	<Paper>
	<Avatar
                alt={`Avatar n°${3 + 1}`}
                src={pictures[3]}
              />
<HighchartsReact
highcharts={Highcharts}
options={this.generateOptionsGauge(2,"Dora")}
ref="chartComponent1"/>
</Paper>
</Grid>
				<Grid item xs={6}>
							  	<Button variant="contained" color="primary" onClick={this.handleClick}>
        To my Penguin island
      </Button>			
</Grid>	 
</Grid>


	}else if (state===6){
		display=
		<Grid container spacing={3}>
<Grid item xs={6}>

		{<img style={{width: 1000}} src={Island}/>}
		
</Grid>
      <Chip
	  avatar={<Avatar alt="Dora" src={pictures[3]} />}
        label="Penguin Saver Superhero"
        deleteIcon={Cup}
      />
</Grid>
	}
	
	   
      return (
         <div>
            <Header/>
		<Paper>
			{display}

					 </Paper>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Save the Penguins</h1>
         </div>
      );
   }
}




Highcharts.theme = {
    colors: ['#f45b5b', '#8085e9', '#8d4654', '#7798BF', '#aaeeee',
        '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: 'Signika, serif'
        }
    },
    title: {
        style: {
            color: 'black',
            fontSize: '16px',
            fontWeight: 'bold'
        }
    },
    subtitle: {
        style: {
            color: 'black'
        }
    },
    tooltip: {
        borderWidth: 0
    },
    labels: {
        style: {
            color: '#6e6e70'
        }
    },
    legend: {
        backgroundColor: '#E0E0E8',
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px'
        }
    },
    xAxis: {
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    },
    yAxis: {
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    },
    plotOptions: {
        series: {
            shadow: true
        },
        candlestick: {
            lineColor: '#404048'
        },
        map: {
            shadow: false
        }
    },

    // Highstock specific
    navigator: {
        xAxis: {
            gridLineColor: '#D0D0D8'
        }
    },
    rangeSelector: {
        buttonTheme: {
            fill: 'white',
            stroke: '#C0C0C8',
            'stroke-width': 1,
            states: {
                select: {
                    fill: '#D0D0D8'
                }
            }
        }
    },
    scrollbar: {
        trackBorderColor: '#C0C0C8'
    }

};

Highcharts.setOptions(Highcharts.theme);

const marks = [
  {
    value: 1,
    label: '0°C',
  },
  {
    value: 2,
    label: '20°C',
  },
  {
    value: 3,
    label: '37°C',
  },
  {
    value: 4,
    label: '100°C',
  },
];



const rows = [
{
	name:'Mobility',
	expense:600,
	carbon:0.45
},{
	name:'Household',
	expense:1530,
	carbon:0.3
},{
	name:'Food',
	expense:1120,
	carbon:0.2
},{
	name:'Goods',
	expense:1050,
	carbon:0.15
},

];



function valuetext(value) {
  return `${value}°C`;
}
const options = {
  chart: {
    type: "pie"
  }, title: {
        text: 'Spending based on categories'
    },
  series: [
    {
      data: [
        {
			name: 'Mobility',
          y:900
        },
        {
			name: 'Household',
          y: 1530
        },
        {
			name: 'Food',
          y: 1120
        },
		 {
			name: 'Goods',
          y:1050
        }
      ]
    }
  ]
};

const optionsExpensis = {
  chart: {
    type: "pie"
  }, title: {
        text: 'Carbon footprint per category'
    },
  series: [
    {
      data: [
        {
			name: 'Mobility',
          y: 0.45
        },
        {
			name: 'Household',
          y: 0.3
        },
        {
			name: 'Food',
          y: 0.2
        },
		 {
			name: 'Goods',
          y: 0.15
        }
      ]
    }
  ]
};
const optionsGauge = {
  chart: {
        type: 'solidgauge',
        height: '55%',

       
    },
  title: {
        text: 'Your team reduction progress',
        style: {
            fontSize: '24px'
        }
    },
tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },
pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },
  series: [{
        name: 'Move',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 80
        }]
    }, {
        name: 'Exercise',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y: 65
        }]
    }, {
        name: 'Stand',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y: 50
        }]
    }]
};
const optionsGauge2 = {
  chart: {
        type: 'solidgauge',
        height: '55%',

       
    },
  title: {
        text: 'Your team reduction progress',
        style: {
            fontSize: '24px'
        }
    },
tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },
pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },
  series: [{
        name: 'Move',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 100
        }]
    }, {
        name: 'Exercise',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y: 100
        }]
    }, {
        name: 'Stand',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y: 80
        }]
    }]
};

export default App;




