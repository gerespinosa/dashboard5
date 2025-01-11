import { Popover } from "@mui/material";
import Link from "next/link";
import * as React from 'react';

interface BasicPopoverProps {
  anchorEl: HTMLDivElement | null;
  onClose: () => void;
  user: any
}

const BasicPopover: React.FC<BasicPopoverProps> = ({ anchorEl, onClose, user }) => {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const userId = user?._id

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{ mb: 2, ml: 2 }}
    >
      <ul className="flex flex-col text-xl font-semibold text-primary">
        <Link href={"https://www.google.com"} className="hover:bg-accent"> Settings </Link>
        <Link href={`/${userId}/profile`} className="hover:bg-accent"> Profile </Link>
      </ul>
    </Popover>
  );
};

export default BasicPopover;
