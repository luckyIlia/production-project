import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../types/jsonSettings';

export const [useJsonSettings, getJsonSettings] = buildSelector(state => state.user?.authData?.jsonSetting);

export const [useJsonSettingsByKey, getJsonSettingsByKey] = buildSelector(
    (state, key: keyof JsonSettings) => state.user?.authData?.jsonSetting?.[key]);
