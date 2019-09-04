import logger from '../index'
describe('logger',()=>{
    it('console',async ()=>{
        logger.debug('debug')()
        logger.error('error')()
        logger.info('info')()
        logger.log('log')()
        logger.warn('warn')()
 
        
    })
})