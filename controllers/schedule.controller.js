const Schedule = require('../models/schedule.model');
const Team = require('../models/team.model');
const ErrorWithHTTPStatus = require('../utils/error.HttpStatus.utils');

const createSchedule = async (request, response, next) => {
  try {
    const schedule = new Schedule({
      teamOne_name: request.body.teamOneName,
      teamTwo_name: request.body.teamTwoName,
      location: request.body.location,
      date: request.body.date,
      time: request.body.time,
      division: request.body.division,
    });
    await Schedule.create(schedule);
    response.send('Schedule Created');
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updateSchedule = async (request, response, next) => {
  try {
    const schedule = request.body;
    const updatedSchedule = await Schedule.updateOne(schedule);
    response.send(updatedSchedule);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getSchedulesByTeam = async (request, response, next) => {
  try {
    const teamId = request.params.id;
    const teamSchedule = (await Schedule.find({ teamOne_id: teamId })) && Schedule.find({ teamTwo_id: teamId });
    response.send(teamSchedule);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getAllSchedules = async (request, response, next) => {
  try {
    const schedules = await Schedule.find();
    if (!schedules) {
      response.send('No schedules available');
    }
    response.send(schedules);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const deleteSchedule = async (request, response, next) => {
  response.send('Deleted Schedule');
};

module.exports = {
  createSchedule,
  updateSchedule,
  getSchedulesByTeam,
  getAllSchedules,
  deleteSchedule,
};
