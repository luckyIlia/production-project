export {
    Profile,
    ProfileSchema,
} from './model/types/profile';

export {
    profileReducer,
    profileActions,
} from './model/slice/profileSlice';

export {
    fetchProfileData,
} from './model/service/fetchProfileData/fetchProfileData';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';

export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
