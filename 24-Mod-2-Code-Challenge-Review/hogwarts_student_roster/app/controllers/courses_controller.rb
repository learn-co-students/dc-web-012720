class CoursesController < ApplicationController
    def show
        @course = Course.find(params[:id])
    end

    def edit
       @course = Course.find(params[:id]) 
    end

    def update
        @course = Course.find(params[:id])
        @course.update(course_params)
        redirect_to course_path(@course)
    end

    private

    def course_params
        params.require(:course).permit(:name, :description, student_ids: [])
    end
end
