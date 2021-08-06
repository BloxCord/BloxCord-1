module.exports = {
	groupId: 4009080,
	maximumRank: 254,
	prefix: ';',
	logChannelId: '860631862107963422',
	shoutChannelId: '860660041752772678',
	auditLogChannelId: '860659831412097044',
	colors: {
		info: '#5b57d9',
		error: '#de554e',
		neutral: '#f2f255',
		success: '#43d177'
	},
	verificationChecks: false,
	firedRank: 1,
	xpRankup: {
		enabled: false,
		roles: [
			// Example: {
			//     rank: 2,
			//     xpNeeded: 10
			// }
		]
	},
	memberCount: {
		enabled: false,
		groupIconURL: '',
		channelId: '',
		milestones: []
	},
	antiAbuse: {
		enabled: false,
		bypassRank: 255,
		duration: 120,
		threshold: 5,
		actionRank: null,
		actionLogChannelId: ''
	}
};
