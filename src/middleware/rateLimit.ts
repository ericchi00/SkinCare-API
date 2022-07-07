import { rateLimit } from 'express-rate-limit';

// limits to 20 requests for 5 minutes
const rateLimiter = rateLimit({
	windowMs: 5 * 60 * 1000,
	max: 20,
	standardHeaders: true,
	legacyHeaders: false,
});

export default rateLimiter;
