import axios from 'axios';
import { UserFilter } from '../model/User';
import StringUtil from '../utils/StringUtil';

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}
const API_SERVER_PATH = 'http://52.78.79.159:8080/api';

const getFeeds = async (filterOption: UserFilter) => {
  const { temperature, tempDifference } = filterOption;

  const styleIds = StringUtil.arrayToParamValue(filterOption.styleIds);
  const weather = StringUtil.arrayToParamValue(filterOption.weather);
  const minTEmp = temperature - tempDifference;
  const maxTemp = temperature + tempDifference;

  const response = await axios({
    method: HttpMethod.GET,
    url: `${API_SERVER_PATH}/posts?styleIds=${styleIds}&weather=${weather}&minTemp=${minTEmp}&maxTemp=${maxTemp}`,
    headers: {
      Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.xoeHyHhyME0Wz-xPezwnzkuR94ZZAf1hDCy4pPDJR-s',
    },
  });

  return response;
};

const getStyles = async () => {
  const response = await axios({
    method: HttpMethod.GET,
    url: `${API_SERVER_PATH}/styles`,
    headers: {
      Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.xoeHyHhyME0Wz-xPezwnzkuR94ZZAf1hDCy4pPDJR-s',
    },
  });

  return response;
};

export default { getFeeds, getStyles };
