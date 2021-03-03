import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

export default function TabPanel(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node.isRequired,
};