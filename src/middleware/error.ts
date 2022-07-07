import { Request, Response, NextFunction } from 'express';
import createError, { HttpError } from 'http-errors';

// catch 404 and forward to error handler
const errorConverter = (req: Request, res: Response, next: NextFunction) => {
	next(createError(404));
};

// error handler
const errorHandler = (
	err: HttpError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.json(err);
};

export { errorConverter, errorHandler };
