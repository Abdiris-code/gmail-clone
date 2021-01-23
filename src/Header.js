import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { logout, selecUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

function Header() {
	const user = useSelector(selecUser);
	const dispacth = useDispatch();

	const signOut = () => {
		auth.signOut().then(() => {
			dispacth(logout({}));
		});
	};

	return (
		<div className="header">
			<div className="header__left">
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img
					src="https://cdn.vox-cdn.com/thumbor/ttJ6TTVOWTTi2p3EaeeLfS4fUS8=/0x0:1320x880/1400x933/filters:focal(555x335:765x545):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg"
					alt=""
				/>
			</div>
			<div className="header__middle">
				<SearchIcon />
				<input placeholder="Search mail" type="text" />
				<ArrowDropDownIcon className="header__inputCarrot" />
			</div>
			<div className="header__right">
				<IconButton>
					<AppsIcon />
				</IconButton>
				<IconButton>
					<NotificationsIcon />
				</IconButton>
				<Avatar onClick={signOut} src={user?.photoUrl} />
			</div>
		</div>
	);
}

export default Header;
