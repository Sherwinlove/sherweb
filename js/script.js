function toggleNav() {
	var nav = document.getElementById('side-nav');
	if (nav.className.search(' open') === -1) {
		nav.className += ' open';
	} else {
		nav.className = nav.className.replace(' open','');
	}
}