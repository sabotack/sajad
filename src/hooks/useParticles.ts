import { ISourceOptions } from '@tsparticles/engine';
import { useMemo } from 'react';

const useParticles = (config: { [key: string]: unknown }): ISourceOptions => {
    return useMemo(() => config, [config]);
};

export default useParticles;
