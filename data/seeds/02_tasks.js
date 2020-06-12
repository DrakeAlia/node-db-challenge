exports.seed = function(knex) {
	return knex('tasks').truncate().then(function() {
		return knex('tasks').insert([
			{ project_id: 1, descriptions: 'Fork your sprint' },
			{
				project_id: 1,
				descriptions: 'Clone to your branch repo and change branch name'
			},
			{ project_id: 1, descriptions: 'Please display your coding skills here!' },
			{ project_id: 2, descriptions: 'Clone and commit to your project' },
			{
				project_id: 2,
				descriptions: 'Communicate wuth your team as much as possible'
			},
			{ project_id: 2, descriptions: 'Please display your coding skills here!' }
		]);
	});
};
