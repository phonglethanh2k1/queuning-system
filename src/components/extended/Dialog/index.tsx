import React from 'react';
import DialogMaterial from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  open: boolean;
  onClose?(): void;
  label?: string;
  footerDialog?: React.ReactNode;
  children: React.ReactNode;
}

const Dialog: React.FC<Props> = ({ label = '', onClose, open = false, children, footerDialog }) => (
  <DialogMaterial open={open} onClose={() => onClose && onClose()}>
    {label && <DialogTitle>{label}</DialogTitle>}

    <DialogContent>{children}</DialogContent>

    <DialogActions>{footerDialog}</DialogActions>
  </DialogMaterial>
);
export default Dialog;
