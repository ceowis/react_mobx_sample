import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

interface customProp {
  isOpen:any, closeModal:any, children:any, name:any, callback:(temp:any)=>void
}

const CustomModal = ({
  isOpen, closeModal, children, name, callback,
}:customProp) => {

  const setData = () => {
    callback('부모창으로 값을 전달합니다. ');
  };

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Paper
        elevation={2}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          maxWidth: '100%',
          maxHeight: '90%',
          overflowY: 'auto',
        }}
      >
         <Box style={{ margin: '25%' }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Modal Header
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Modal content {name}
          </Typography>
          <Button variant="contained" onClick={setData}>callback Data</Button>
         </Box>
      </Paper>
      
    </Modal>
  );
};

export default CustomModal;
