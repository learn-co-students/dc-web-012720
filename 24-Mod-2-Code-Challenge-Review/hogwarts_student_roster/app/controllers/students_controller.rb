class StudentsController < ApplicationController
    def index
        @students = Student.all
    end

    def show
        @student = Student.find(params[:id])
    end

    def new
        @student = Student.new
    end

    def create
        @student = Student.new(name: params[:student][:name], grade: params[:student][:grade])
        if @student.valid?
            @student.save
            @course = Course.find(params[:student][:courses])
            StudentCourse.create(student: @student, course: @course)
            redirect_to student_path(@student)
        else
            render :new
        end
    end

    private

    def student_params
        params.require(:student).permit(:name, :grade, :courses)
    end
end
