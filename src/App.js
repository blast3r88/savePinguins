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

import Grid from '@material-ui/core/Grid';



class App extends React.Component {
   constructor() {
      super();
      this.state = {
        pinguins:Pinguin1,
		noOfPinguins:1,
		state:1
   }
this.handleChange = this.handleChange.bind(this);
this.handleClick = this.handleClick.bind(this);
   }
   
         handleClick(event) {
		   this.setState({state: 2});

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
	   
	   const state = this.state.state;
	   
	   let display;

	   if (state===1) {
      display=
 <Grid container spacing={3}>
			 
   <Grid item xs={3}>
			<Typography id="discrete-slider" gutterBottom>
        Select the number of pinguins you want to save
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

			    {
				<img style={{width: 500}} src={this.state.pinguins}/>
            }
		
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
      		</Grid>
    }
	   
      return (
         <div>
            <Header/>

			{display}

					 
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Save the Pinguins</h1>
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


export default App;




