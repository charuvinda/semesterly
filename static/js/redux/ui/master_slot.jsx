import React from 'react';
import { COLOUR_DATA } from '../constants.jsx';
import classNames from 'classnames';

class MasterSlot extends React.Component {
	constructor(props) {
		super(props);
        this.stopPropagation = this.stopPropagation.bind(this);
        this.onMasterSlotHover = this.onMasterSlotHover.bind(this);
        this.onMasterSlotUnhover = this.onMasterSlotUnhover.bind(this);
    }
    stopPropagation(callback, event) {
        event.stopPropagation();
        callback();
    }
	onMasterSlotHover() {
        this.setState({ hovered : true});
        this.updateColours(COLOUR_DATA[this.props.colourIndex].highlight);
    }
    onMasterSlotUnhover() {
        this.setState({ hovered : false});
        this.updateColours(COLOUR_DATA[this.props.colourIndex].background);
    }
    updateColours(colour) {
        // update sibling slot colours (i.e. the slots for the same course)
        $(".slot-" + this.props.course.id)
          .css('background-color', colour)
    }

	render() {
        let friendCircles = this.props.classmates && this.props.classmates.classmates ? this.props.classmates.classmates.map(c => {
            return <div className="ms-friend" key={c.img_url} style={{backgroundImage: 'url(' + c.img_url + ')'}}></div>;
        }) : null;
        let masterSlotClass = 'master-slot slot-' + this.props.course.id
        masterSlotClass = this.props.onTimetable ? masterSlotClass : masterSlotClass + ' optional';
		return <div className={masterSlotClass}
					onMouseEnter={ this.onMasterSlotHover }
                    onMouseLeave={ this.onMasterSlotUnhover }
                    style={ { backgroundColor: COLOUR_DATA[this.props.colourIndex].background }}
                    onClick={this.props.fetchCourseInfo}
               >
                    
		        <div className="slot-bar"
		        	style={ { backgroundColor: COLOUR_DATA[this.props.colourIndex].border } }
		        ></div>
		        <div className="master-slot-content">
		            <h3>{ this.props.course.code }</h3>
		            <h3>{ this.props.course.name }</h3>
		            <h3>Baryl Castello</h3>
		            <h3>4 credits</h3>
		        </div>
		        <div className="master-slot-actions">
		            <i className="fa fa-share-alt"></i>
		            <i className="fa fa-times"></i>
		        </div>
		        <div className="master-slot-friends">
                    {friendCircles}
		        </div>
    	</div>
    }
}

export default MasterSlot;
