export const TYPE_LOG = 'LOG'
export const TYPE_WARN = 'WARN'
export const TYPE_ERR = 'ERR'

function test (log, type='log')
{
    console[type](log)
}

export default test;