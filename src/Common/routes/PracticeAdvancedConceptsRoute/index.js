import React, { Component } from 'react';

class AdvancedConcepts extends Component{
    render(){
        return(
            <div>
                <p>HOC's Usage</p>
                <div>
                    <p>ViewEditToggle</p>
                    {this.changeContent()}
                    <button>{this.btnText}</button>
                </div>

                <div>
                    <p>CollapseExpand</p>
                    <div>Sample Shopping List</div>
                    <div>
                        <button>{this.btnText}</button>
                        {this.changeContent()}
                    </div>                    
                </div>

                <div>
                    <p>DeviceTypeText</p>
                    <div>
                        <p>Device Type: </p>
                    </div>
                </div>

                <p>Render Props Usage</p>

                <div>
                    <p>DisplayMouseCoordinates</p>
                    <p>The mouse position is</p>
                </div>



            </div>
        )
    }
}